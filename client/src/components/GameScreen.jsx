import React from "react";
import { WasmBoy } from "wasmboy";
import PKMNRed from '../assets/PKMNRed.gb'
import {useRef} from "react"


const GameScreen = () => {

    const canvasRef = useRef();

  async function setup() {

      const WasmBoyOptions = {
        headless: false,
        useGbcWhenOptional: true,
        isAudioEnabled: true,
        frameSkip: 1,
        audioBatchProcessing: true,
        timersBatchProcessing: false,
        audioAccumulateSamples: true,
        graphicsBatchProcessing: false,
        graphicsDisableScanlineRendering: true,
        tileRendering: true,
        tileCaching: true,
        gameboyFPSCap: 60,
        updateGraphicsCallback: false,
        updateAudioCallback: false,
        saveStateCallback: false
      };

      await WasmBoy.config(WasmBoyOptions, canvasRef.current)
      await WasmBoy.loadROM(PKMNRed)
      await WasmBoy.play()


  }


  return (
    <>
      <div className="App">
        <canvas ref={canvasRef} className="Gb"></canvas>
        <div className="btn" onClick={setup}>
          Play
        </div>
      </div>
    </>
  );
};

export default GameScreen;
