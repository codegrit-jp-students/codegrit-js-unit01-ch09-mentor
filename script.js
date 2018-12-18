

//画像情報のオブジェクトを格納した配列
const picArray = [
{src: './images/pic_1.jpg', title: 'picture 1'},
{src: './images/pic_2.jpg', title: 'picture 2'},
{src: './images/pic_3.jpg', title: 'picture 3'},
{src: './images/pic_4.jpg', title: 'picture 4'},
{src: './images/pic_5.jpg', title: 'picture 5'},
{src: './images/pic_6.jpg', title: 'picture 6'}
];

//スライドショーの切り替え回数を数えるカウンター
let counter = 0;
//再生停止を判断する変数
let playingID = 0;

//写真を切り替える関数（アロー関数を使って定義）
let changePicture = () => {
    //カウンターが配列の要素数を超えない限り処理を実行
   if( counter < picArray.length ) {
      document.getElementById('pics').src = picArray[counter].src;
      document.getElementById('pic-title').innerHTML = picArray[counter].title;
      counter++;
    //カウンターが配列の要素数を超得たらカウンターリセット
   }else{
      counter = 0;
      document.getElementById('pics').src = picArray[0].src;
      document.getElementById('pic-title').innerHTML = picArray[0].title;
   }
}

// ボタンを押してスライドショーを再生・停止する関数
function playSlidedeshow(){
   if( playingID == 0 ){
     //再生処理
      playingID = setInterval(changePicture,2000);
      document.getElementById('playButton').innerHTML = "STOP";
   }else {
    //停止処理
      clearInterval(playingID);
      document.getElementById('playButton').innerHTML = "PLAY";
      playingID = 0;//停止処理
   }
}
