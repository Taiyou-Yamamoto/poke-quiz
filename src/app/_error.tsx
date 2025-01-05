import { NextPageContext } from 'next';

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>{statusCode ? `エラー: ${statusCode}` : 'エラーが発生しました。'}</h1>
      <p>
        {statusCode === 404
          ? 'お探しのページが見つかりません。'
          : 'サーバーエラーが発生しました。'}
      </p>
    </div>
  );
}

// デフォルトで提供される`getInitialProps`を利用してエラーコードを取得
Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default Error;
