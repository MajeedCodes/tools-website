"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiPause, FiDownload, FiVolume2, FiSettings, FiMic, FiSliders } from 'react-icons/fi';

export default function TextToSpeech() {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [customVoice, setCustomVoice] = useState<string | null>(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const synth = useRef<SpeechSynthesis | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioContext = useRef<AudioContext | null>(null);
  const audioElement = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    synth.current = window.speechSynthesis;
    audioContext.current = new AudioContext();
    const updateVoices = () => {
      setVoices(synth.current!.getVoices());
    };
    synth.current.onvoiceschanged = updateVoices;
    updateVoices();

    return () => {
      if (synth.current) {
        synth.current.cancel();
      }
    };
  }, []);

  const speak = () => {
    if (synth.current && text) {
      if (isPaused) {
        synth.current.resume();
        setIsPaused(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;
        utterance.onend = () => {
          setIsSpeaking(false);
          setIsPaused(false);
        };
        synth.current.speak(utterance);
      }
      setIsSpeaking(true);

      // Start recording
      const destination = audioContext.current!.createMediaStreamDestination();
      audioElement.current = new Audio();
      audioElement.current.srcObject = destination.stream;

      mediaRecorder.current = new MediaRecorder(destination.stream);
      const audioChunks: Blob[] = [];

      mediaRecorder.current.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
      };

      mediaRecorder.current.start();
    }
  };

  const pauseSpeaking = () => {
    if (synth.current) {
      synth.current.pause();
      setIsPaused(true);
    }
  };

  const stopSpeaking = () => {
    if (synth.current) {
      setIsSpeaking(false);
      setIsPaused(false);
      synth.current.cancel();
      if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
        mediaRecorder.current.stop();
      }
    }
  };

  const downloadAudio = () => {
    if (audioUrl) {
      const a = document.createElement('a');
      a.href = audioUrl;
      a.download = 'text-to-speech.wav';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder.current = new MediaRecorder(stream);
        const audioChunks: Blob[] = [];

        mediaRecorder.current.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.current.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setCustomVoice(audioUrl);
        };

        mediaRecorder.current.start();
        setIsRecording(true);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Advanced Text to Speech
        </h1>
        <div className="mb-6">
          <textarea
            className="w-full h-48 p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 resize-none"
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-4">
              <FiSettings className="text-gray-600" />
              <select
                className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={selectedVoice ? voices.indexOf(selectedVoice) : ''}
                onChange={(e) => setSelectedVoice(voices[Number(e.target.value)])}
              >
                <option value="">Select a voice</option>
                {voices.map((voice, index) => (
                  <option key={index} value={index}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <FiMic className="text-gray-600" />
              {isRecording ? (
                <button
                  onClick={stopRecording}
                  className="flex-grow py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Stop Recording
                </button>
              ) : (
                <button
                  onClick={startRecording}
                  className="flex-grow py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Record Custom Voice
                </button>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="pitch" className="mb-2 text-sm font-medium text-gray-700">Pitch</label>
              <input
                type="range"
                id="pitch"
                min="0.5"
                max="2"
                step="0.1"
                value={pitch}
                onChange={(e) => setPitch(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="rate" className="mb-2 text-sm font-medium text-gray-700">Rate</label>
              <input
                type="range"
                id="rate"
                min="0.5"
                max="2"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="volume" className="mb-2 text-sm font-medium text-gray-700">Volume</label>
              <input
                type="range"
                id="volume"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isSpeaking ? (isPaused ? speak : pauseSpeaking) : speak}
              className="flex-1 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center"
            >
              {isSpeaking ? (
                isPaused ? (
                  <>
                    <FiPlay className="mr-2" /> Resume
                  </>
                ) : (
                  <>
                    <FiPause className="mr-2" /> Pause
                  </>
                )
              ) : (
                <>
                  <FiPlay className="mr-2" /> Start Speaking
                </>
              )}
            </motion.button>
            {isSpeaking && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={stopSpeaking}
                className="flex-1 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center"
              >
                <FiVolume2 className="mr-2" /> Stop
              </motion.button>
            )}
          </div>
        </div>
        <AnimatePresence>
          {audioUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Generated Audio</h2>
              <audio controls src={audioUrl} className="w-full mb-4" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadAudio}
                className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
              >
                <FiDownload className="mr-2" /> Download Audio
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {customVoice && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Custom Voice Recording</h2>
            <audio controls src={customVoice} className="w-full" />
          </div>
        )}
      </motion.div>
    </div>
  );
}

