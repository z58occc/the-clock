import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {


  const [arr, setArr] = useState([]);


  useEffect(() => {
    const intervalId = setInterval(() => {//1秒跑一次
      const nowTime = new Date();//取得現在時間
      

      const second = nowTime.getSeconds()//現在幾秒
      const ang1 = 90 + (360 / 60) * second//秒針轉幾度（1秒轉360/60）
      const minute = nowTime.getMinutes()//現在幾分
      const ang2 = 90 + (360 / 60 ) * minute +(360/60/60) *second//分針轉幾度（已經轉了(360 / 60 ) * minute度）加上一秒轉360/60/60
      const hour = nowTime.getHours()
      const ang3 = 90 + (360 / 12) * hour+(360 / 12/60 ) * minute+(360/12/60/60)*second
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
          {/* 指針統一用hand定位 */}
          <div className='hand  hour-hand'
            style={{
              transform: `rotate(${arr[2]}deg)`//旋轉
            }}
          >

          </div>
          <div className='hand  min-hand'
            style={{
              transform: `rotate(${arr[1]}deg)`
            }}
          >

          </div>
          <div className='hand   sec-hand'
            style={{
              transform: `rotate(${arr[0]}deg)`
            }}
          >

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
