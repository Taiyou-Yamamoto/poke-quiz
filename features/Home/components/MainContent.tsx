'use client';
import { getScore } from '@/app/utils/axiosHandle';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from '@/app/utils/MaterialUI';
import Ranking from './Ranking';
import { RankData } from '@/app/type';

const MainContent = () => {
  const [toggle, SetToggle] = useState<boolean>(false);
  const [rankData, SetRankData] = useState<RankData>({
    quiz1: [],
    quiz2: [],
    quiz3: [],
  });
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleSwitch = () => {
    SetToggle(!toggle);
  };

  const makeFullArray = (array: any) => {
    while (array.length < 10) {
      array.push({ score: 0 });
    }
    return array;
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getScore();

  //     // 空配列チェックとデフォルト値設定
  //     const updatedRes = {
  //       quiz1: res.quiz1.length <= 10 ? makeFullArray(res.quiz1) : res.quiz1,
  //       quiz2: res.quiz2.length <= 10 ? makeFullArray(res.quiz2) : res.quiz2,
  //       quiz3: res.quiz3.length <= 10 ? makeFullArray(res.quiz3) : res.quiz3,
  //     };

  //     console.log('updatedRes', updatedRes);
  //     SetRankData(updatedRes);
  //   };

  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    console.log(rankData);
  }, [rankData]);

  return (
    <div className='h-full w-full z-50'>
      <div className='relative z-50 start top-14 left-3/4'>
        <button className='yellow-button' onClick={toggleSwitch}>
          {toggle ? '戻る' : 'ランキング'}
        </button>
      </div>

      {toggle ? (
        <>
          <div className='relative flex justify-center items-center h-screen'>
            <Box
              sx={{
                maxWidth: '500px',
                width: '100%',
                boxShadow: 10,
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 4,
              }}
            >
              <AppBar
                position='static'
                sx={{
                  borderTopLeftRadius: 16, // 左上の角を丸くする
                  borderTopRightRadius: 16, //
                  bgcolor: 'rgba(255, 255, 255, 0)',
                  fontWeight: 500,
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor='secondary'
                  textColor='inherit'
                  variant='fullWidth'
                  aria-label='full width tabs example'
                >
                  <Tab
                    label='モンスター'
                    {...a11yProps(0)}
                    sx={{
                      borderTopLeftRadius: 16,
                      bgcolor: 'rgb(246, 63, 63)',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                    }}
                  />
                  <Tab
                    label='スーパー'
                    {...a11yProps(1)}
                    sx={{
                      bgcolor: '#38a4f1',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                    }}
                    className={'gray-shadow'}
                  />
                  <Tab
                    label='ハイパー'
                    {...a11yProps(2)}
                    sx={{
                      borderTopRightRadius: 16,
                      bgcolor: 'rgba(255, 224, 50, 0.931)',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                    }}
                    className={'gray-shadow'}
                  />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Ranking rankData={rankData.quiz1} quizId={1} />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <Ranking rankData={rankData.quiz2} quizId={2} />
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Ranking rankData={rankData.quiz3} quizId={3} />
              </TabPanel>
            </Box>
          </div>
        </>
      ) : (
        <>
          {' '}
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
            <div className=''>
              <Image
                className='animate-chime mx-auto w-[40rem] h-[15rem]'
                src='/images/Poke-quiz.png'
                alt='My Image'
                width={500}
                height={300}
              />
            </div>
            <Link
              href='/quiz1'
              className='w-[10rem] mx-auto font-DotJP gray-shadow hover:animate-shake font-extrabold text-white shadow-2xl active:shadow-none py-2 px-4 rounded-md border-solid border-4 bg-red-600 border-white mt-4 ring-offset-2 ring-4'
            >
              モンスタ-レベル
            </Link>
            <Link
              href='/quiz2'
              className='w-[10rem] mx-auto font-DotJP hover:animate-shake font-extrabold text-white shadow-2xl active:shadow-none py-2 px-4 pl-6 rounded-md border-solid border-4 border-red-600 bg-blue-500 mt-4 ring-offset-2 ring-4'
            >
              スーパ-レベル
            </Link>
            <Link
              href='/quiz3'
              className='w-[10rem] mx-auto font-DotJP hover:animate-shake font-extrabold text-white shadow-2xl active:shadow-none py-2 px-4 pl-6 rounded-md border-solid border-4 border-yellow-400 bg-gray-700 mt-4 ring-offset-2 ring-4'
            >
              ハイパーレベル
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MainContent;
