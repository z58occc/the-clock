import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {


  const [arr, setArr] = useState([]);

  const num = [...Array(12)].map((_, i) => i + 13);
  const insideNum = [...Array(12)].map((_, i) => i + 1);






  useEffect(() => {
    const intervalId = setInterval(() => {//1秒跑一次
      const nowTime = new Date();//取得現在時間


      const second = nowTime.getSeconds()//現在幾秒
      const ang1 = 90 + (360 / 60) * second//秒針轉幾度（1秒轉360/60）
      const minute = nowTime.getMinutes()//現在幾分
      const ang2 = 90 + (360 / 60) * minute + (360 / 60 / 60) * second//分針轉幾度（已經轉了(360 / 60 ) * minute度）加上一秒轉360/60/60
      const hour = nowTime.getHours()
      const ang3 = 90 + (360 / 12) * hour + (360 / 12 / 60) * minute + (360 / 12 / 60 / 60) * second
      //時針轉幾度（已經轉了(360 / 60 ) * hour度）加上(360 / 12/60 ) * minute加上一秒轉(360/12/60/60)*second

      setArr([ang1, ang2, ang3]);
    }, 1000);

    return () => clearInterval(intervalId); // 清除 interval
  }, []);







  return (
    <div className="App  ">
      <div className='back   d-grid '>
        {/* d-grid 防止margin崩塌 */}
        <div className='clock  '>
          <div className='clock-face d-flex'>
            {num.map((n, i) => {
              return (
                <span className='clock-number' key={i}
                  style={{
                    transform: `rotate(${360 / 12 * (i + 10)}deg) translate(150px) rotate(-${360 / 12 * (i + 10)}deg)`
                  }}
                >
                  {n}
                </span>
              )
            })}
            {insideNum.map((n, i) => {
              return (
                <span className='clock-number' key={i}
                  style={{
                    transform: `rotate(${360 / 12 * (i + 10)}deg) translate(100px) rotate(-${360 / 12 * (i + 10)}deg)`
                  }}
                >
                  {n}
                </span>
              )
            })}
            {/* 指針統一由hand定位 */}
            <div className='hand  hour-hand  d-flex flex-row-reverse'
              style={{
                transform: `rotate(${arr[2]}deg)`,
                padding:'3px'
              }}
            >
             <div className='border border-black'
                style={{
                  width: '30%',
                }}
              ></div>
            </div>
            <div className='hand  min-hand d-flex flex-row-reverse '
              style={{
                transform: `rotate(${arr[1]}deg)`,
                padding: '1px'
              }}
            >
              <div className='border border-white bg-white'
                style={{
                  width: '4px',
                  borderRadius: '100% ',
                  height: '4px'
                }}
              ></div>
              <div className='border '
                style={{
                  width: '30%',
                }}
              ></div>

            </div>
            <div className='hand   sec-hand d-flex'
              style={{
                transform: `rotate(${arr[0]}deg)`
              }}
            >
              {/* <div className=''
                style={{
                  width: '100%',
                  border:'solid',
                  borderColor:'#88bd26',
                  borderWidth:'0.5px'
                }}
              ></div> */}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
