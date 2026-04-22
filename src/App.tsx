import {useState, useRef} from 'react';
import title from "./assets/HypeBoy/attention-new2.png"
import music_player_icon from "./assets/HypeBoy/music-player-new.png"
import media_player_icon from "./assets/HypeBoy/media-player-icon.png"
import notepad_icon from "./assets/HypeBoy/notepad-icon.png"
import "./App.css"
import music_player from "./assets/HypeBoy/cd_player.jpg"
import notepad from "./assets/HypeBoy/notepad_new2.png"
import media_player from "./assets/HypeBoy/media-player-new.jpg"
import newjeans from "./assets/HypeBoy/newjeans-sticker-new3.png"
import pic_player from "./assets/HypeBoy/pic_player.jpg"
import pic_player_icon from "./assets/HypeBoy/pic-player-icon.png"
import attention from "./assets/HypeBoy/attention.jpg"
import start_button from "./assets/HypeBoy/start-button.png"
import attention_mp3 from "./assets/HypeBoy/Attention.mp3"
import music_player_close from "./assets/HypeBoy/music-player-close.jpeg"
import video from "./assets/HypeBoy/attention-video.mp4"
import group_pic1 from "./assets/HypeBoy/newjeans_pic/1.jpg"
import group_pic2 from "./assets/HypeBoy/newjeans_pic/2.jpg"
import group_pic3 from "./assets/HypeBoy/newjeans_pic/3.jpg"
import group_pic4 from "./assets/HypeBoy/newjeans_pic/4.jpg"
import group_pic5 from "./assets/HypeBoy/newjeans_pic/5.jpg"
import group_pic6 from "./assets/HypeBoy/newjeans_pic/6.jpg"
import group_pic7 from "./assets/HypeBoy/newjeans_pic/7.jpg"
import group_pic8 from "./assets/HypeBoy/newjeans_pic/8.jpg"
import group_pic9 from "./assets/HypeBoy/newjeans_pic/9.jpg"
import group_pic10 from "./assets/HypeBoy/newjeans_pic/10.jpg"

import decor_1 from "./assets/HypeBoy/decor_pic/decor-1.jpg"
import decor_2 from "./assets/HypeBoy/decor_pic/decor-2.jpg"
import decor_3 from "./assets/HypeBoy/decor_pic/decor-3.jpg"

import bunny from "./assets/HypeBoy/bunny.png"



function Attention() {

  const imageList = [
    {id:1, src:group_pic1, alt:"1"},
    {id:2, src:group_pic2, alt:"2"},
    {id:3, src:group_pic3, alt:"3"},
    {id:4, src:group_pic4, alt:"4"},
    {id:5, src:group_pic5, alt:"4"},
    {id:6, src:group_pic6, alt:"4"},
    {id:7, src:group_pic7, alt:"4"},
    {id:8, src:group_pic8, alt:"4"},
    {id:9, src:group_pic9, alt:"4"},
    {id:10, src:group_pic10, alt:"4"},
  ];
  const [index, setIndex] = useState(0);

  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const [showNotepad, setShowNotepad] = useState(false);
  const [showMediaPlayer, setShowMediaPlayer] = useState(false);
  const [showPicPlayer, setShowPicPlayer] = useState(false);
  const [text,setText] = useState('');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }; 
  const audioRef = useRef<HTMLAudioElement |null>(null);
  

  const playVideo = () => {
    if (isPlayingVideo){
      setIsPlayingVideo(false);
      stopVideo()
    } else{
      setIsPlayingVideo(true);
      startVideo()
    }
  }

  const playSound = () => {
    if (!audioRef.current){
      audioRef.current = new Audio(attention_mp3);
    }
    const audio = audioRef.current;
    if (audio.paused){
      audio.play();
    }
    else{
      audio.pause();
    }
  }
  //<img src={title} className="title" alt="Hype Boy" style={{ maxWidth: "500px" }} />
  return (
    <div className="container" >
      <div className="title_container">
        <img src={title} className="title" alt="Hype Boy" style={{ maxWidth: "500px" }} />
      </div>
      
      <div className='sticker-container'>
        <img src={newjeans} className="newjeans_sticker"/>
      </div>

      <img src={bunny} className='bunny-sticker'/>
    

      <div className="icon_container">
        <div className="icon_col">
          <button onClick={()=>setShowMusicPlayer(prev=> !prev)} className='icon-btn'>
            <img src={music_player_icon} alt="music player" className="icon-img music-icon"/>
          </button>
          <button onClick={()=>{setShowNotepad(prev=> !prev); setText('')}} className='icon-btn'>
            <img src={notepad_icon} alt="Media Player" className="icon-img"/>
          </button>
        </div>
        <div className='icon_col col2'>
          <button onClick={()=>setShowMediaPlayer(prev=> !prev)} className='icon-btn'>
            <img src={media_player_icon} alt="msg" className="icon-img"/>
          </button>
          <button onClick={()=>setShowPicPlayer(prev=> !prev)} className='icon-btn'>
            <img src={pic_player_icon} alt="pic player" className="icon-img pic-icon"/>
          </button>
        </div>
        
      </div>

      {showMusicPlayer && (
      <div className="music-player-container">
        <img src={music_player} className="music_player"/>
        <img src={attention} className="pic"/>
        <h1 className="artist-text">Newjeans</h1>
        <h1 className="track-text">Attention</h1>
        <button onClick={playSound}>
          <img src={start_button} className="start-button"/>
        </button>
        <button onClick={()=>setShowMusicPlayer(prev=> !prev)}>
          <img src={music_player_close} className="music-player-close"/>
        </button>
      </div>)}

      {showNotepad && (
      <div className="notepad-container">
        <img src={notepad} className="notepad"/>
        <textarea
          value = {text}
          onChange={(e)=>setText(e.target.value)}
          rows = {5}
          className="textarea"
        />
         <button onClick={()=>setShowNotepad(prev=>!prev)} className='notepad-close-btn'></button>
      </div>)}

      {showMediaPlayer && (<div className="media-player-container">
        <img src={media_player} className="media_player"/>
        <video ref={videoRef} className="video">
          <source src={video} type="video/mp4"/>
        </video>
        <button onClick={playVideo} className='video-start-btn'></button>
        <button onClick={()=>setShowMediaPlayer(prev=>!prev)} className='video-close-btn'></button>
      </div>)}

      {showPicPlayer && (<div className='pic-player-container'>
        <img src={pic_player} className='pic-player'/>
        <img src={imageList[index].src} className='pic-img'/>
        <img src={decor_1} className='decor-1'/>
        <img src={decor_2} className='decor-2'/>
        <img src={decor_3} className='decor-3'/>
        <button onClick={()=> setIndex(prev=>(prev + 1)%imageList.length)} className='pic-next-btn'></button>
        <button onClick={()=>setIndex(prev=>(prev - 1 + imageList.length)%imageList.length)} className='pic-prev-btn'></button>
        <button onClick={()=>setShowPicPlayer(prev=>!prev)} className='pic-close-btn'></button>
      </div>)}

    </div>
  );
}

export default Attention;

