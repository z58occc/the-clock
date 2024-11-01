import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {


  const [arr, setArr] = useState([]);

  const num = [...Array(12)].map((_, i) => i + 13);//產生13~24的陣列
  
  const indicator = [...Array(72)].map((_, i) => i + 1);//產生1~72的陣列

  const insideNum = [...Array(12)].map((_, i) => i + 1);//產生1~12的陣列






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
                <div key={i}
                  style={{
                    position:'absolute',
                    color:'white',
                    fontSize:'12px',
                    transform: `rotate(${360 / 12 * (i + 10)}deg) translate(140px) rotate(-${360 / 12 * (i + 10)}deg)`
                    // 第一個參數相對於圓心轉幾度 第二參數平移（半徑）第三個參數 修正數字本身的角度（轉回來）
                  }}
                >
                  {n}
                </div>
              )
            })}
            {indicator.map((n, i) => {

              if (i % 3 == 0 && i % 6 != 0) {//被3整除不被6整除return 星星
                return (
                    <div className='star '
                    style={{
                      position:'absolute',
                      transform: `rotate(${(360 / 72) * i}deg) translate(120px) `
                    }}
                    ></div>
                )
              } else if (i % 6 == 0) {//被6整除return 直線
                return (
                  
                    <div className='line '
                    style={{
                      width: "24px",
                      transform: `rotate(${(360 / 72) * i}deg) translate(120px) `

                    }}
                    ></div>
                )

              }
              else {//剩下的return 白點
                return (
                    <div className='border'
                    style={{
                      position:'absolute',
                      transform: `rotate(${(360 / 72) * i}deg) translate(120px) `
                    }}
                    ></div>
                )
              }
            }

            )}
            {insideNum.map((n, i) => {
              return (
                <div  key={i}
                  style={{
                    position:'absolute',
                    color:'white',
                    fontSize:'12px',
                    transform: `rotate(${360 / 12 * (i + 10)}deg) translate(103px) rotate(-${360 / 12 * (i + 10)}deg)`
                  }}
                >
                  {n}
                </div>
              )
            })}
            {/* 指針統一由hand定位 */}
            <div className='hand  hour-hand  d-flex flex-row-reverse'
              style={{
                transform: `rotate(${arr[2]}deg)`,
                padding: '3px'
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
                padding: '2px'
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
                transform: `rotate(${arr[0]}deg)`,
              }}
            >

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
