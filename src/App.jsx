import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 py-8 flex flex-col items-center justify-center print:p-0 print:bg-white">
      
      {/* 操作バー（PDF印刷時は自動で消えます） */}
      <div className="mb-4 flex items-center gap-4 print:hidden">
        <span className="text-neutral-300 text-sm">
          ※赤い枠は仕上がり目安線です（PDF保存時は自動で消えます）
        </span>
        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-lg shadow-lg cursor-pointer transition"
        >
          PDFとして保存 / 印刷
        </button>
      </div>

      {/* ポスター本体（A4縦：210mm × 297mm） */}
      <div
        id="poster-canvas"
        className="relative w-[210mm] h-[297mm] overflow-hidden bg-neutral-950 shadow-2xl select-none print:shadow-none"
      >
        {/* 1. 背景写真レイヤー */}
        <img
          src="/images/farm_himawari_notext_noqr.png"
          alt="FARMひまわり ポスター背景"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* 2. 文字を読みやすくするための上下グラデーション */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* 3. 右上ロゴ：「FARMひまわり」 */}
        <header
          className="absolute top-[14mm] right-[14mm] z-10"
        >
          <div className="flex items-baseline drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
            <span
              className="bg-clip-text text-transparent text-[23pt] font-bold tracking-[0.02em]"
              style={{
                fontFamily: "'Oswald', sans-serif",
                backgroundImage: 'linear-gradient(180deg, #80520A 0%, #D99C00 55%, #FFF000 100%)',
              }}
            >
              FARM
            </span>
            <span
              className="bg-clip-text text-transparent text-[22pt] font-bold tracking-[-0.02em] ml-[1mm]"
              style={{
                fontFamily: "'BIZ UDPGothic', sans-serif",
                backgroundImage: 'linear-gradient(180deg, #80520A 0%, #D99C00 55%, #FFF000 100%)',
              }}
            >
              ひまわり
            </span>
          </div>
        </header>

        {/* 4. 下部メインキャッチコピー：「農業って、かっこいい」 */}
        <main
          className="absolute bottom-[43mm] inset-x-0 z-10 flex justify-center px-[10mm]"
          style={{
            fontFamily: "'Noto Sans JP', 'Hiragino Kaku Gothic ProN', sans-serif",
          }}
        >
          <h1
            className="text-white text-[39pt] font-medium tracking-[0.03em] leading-none whitespace-nowrap"
            style={{
              textShadow: '0 4px 16px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0, 0, 0, 0.95)',
            }}
          >
            {Array.from('農業って、かっこいい').map((character, index) => (
              <span
                key={index}
                className="inline-block"
                style={{ transform: 'skewX(-10deg)' }}
              >
                {character}
              </span>
            ))}
          </h1>
        </main>

        {/* 5. 右下QRコードエリア */}
        <aside className="absolute bottom-[11mm] right-[11mm] z-10">
          <div className="w-[23mm] h-[23mm] bg-black/85 p-[1.8mm] border border-white/20 shadow-lg flex items-center justify-center">
            <div className="w-full h-full bg-white p-[1mm] flex items-center justify-center">
              <img
                src="/images/QR_farm_himawari_extracted.png"
                alt="QRコード"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}