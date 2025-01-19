import React from 'react';

const QuizStartScreen = ({
  setQuizStart,
  quiz_id,
}: {
  setQuizStart: React.Dispatch<React.SetStateAction<boolean>>;
  quiz_id: number;
}) => {
  const handleStart = () => {
    setQuizStart(false);
  };
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gray-shadow text-wrap'>
      {/* quiz_idによってテキストを変更 */}
      <h2 className='pb-5 sm:text-2xl text-slate-100 mx-5 text-lg'>
        {quiz_id === 1
          ? 'ポケモンの画像が出てくるよ。君は何問解けるかな？'
          : quiz_id === 2
          ? '今回のお題は鳴き声だ！始める前に音量を調整してね！'
          : '最後の問題！ポケモン図鑑のテキストを当てよう！'}
      </h2>
      <button onClick={handleStart} className='yellow-button'>
        スタート
      </button>
    </div>
  );
};

export default QuizStartScreen;
