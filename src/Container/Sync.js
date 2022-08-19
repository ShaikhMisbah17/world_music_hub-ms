import React from "react";
import "./Sync.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import monsoonShootout from "../assets/monsoonShootout.png";
import theTwilightZone from "../assets/theTwilightZone.png";
import giftPoster from "../assets/giftPoster.png";
import prague from "../assets/prague.png";
import pune52 from "../assets/pune52.png";
import ncis2 from "../assets/ncis2.png";
import hornPlease from "../assets/hornPlease.png";
import thatSunday from "../assets/thatSunday.png";
import bajiLatestPoster from "../assets/bajiLatestPoster.png";
import theAlternativePoster from "../assets/theAlternativePoster.png";
import play from "../assets/play-circle.png";
import cannes from "../assets/cannes.png";
import sydney from "../assets/sydney.png";
import brussels from "../assets/brussels.png";
import losAngeles from "../assets/losAngeles.png";

const songs = new Array(12).fill(0).map((_, i) => ({
  id: i + 1,
  name: "Jugni",
  duration: "4:42",
  genre: "genre of song",
}));

const halfSongs = Math.ceil(songs.length / 2);

function Sync() {
  return (
    <div className="sync">
      <div classname="sync__nav">
        <Navbar />
      </div>
      <div className="sync__banner">
        <h2>
          In the end, it’s all about the
          <span className="banner__yellowtext">love of music</span>
        </h2>
        <h4>some of the music we are really proud of</h4>
      </div>
      <div className="wrapper">
        <div className="left-section">
          <h3 className="project-showcase">Project Showcase</h3>
          <div className="leftside__image-section1">
            <img className="frame-images monsoon-img" src={monsoonShootout} />
            <img className="frame-images twilight-img" src={theTwilightZone} />
            <img className="frame-images gift-img" src={giftPoster} />
            <img className="frame-images prague-img" src={prague} />
            <img className="frame-images pune-img" src={pune52} />
          </div>
          <div className="leftside__image-section2">
            <img className="frame-images ncis-img" src={ncis2} />
            <img className="frame-images horn-img" src={hornPlease} />
            <img className="frame-images sunday-img" src={thatSunday} />
            <img className="frame-images baji-img" src={bajiLatestPoster} />
            {/* <img className="frame-images alternative-img" src={alternative} /> */}
          </div>
        </div>
        <div className="divider"></div>
        <div className="right-section">
          <div className="right-section__top-wrapper">
            <div className="col-1">
              <img className="display-image" src={monsoonShootout} />
            </div>
            <div className="col-2">
              <div className="display-image__description">
                <div className="row-alignment">
                  <h3>Monsoon Shootout</h3>
                  <img src={play} />
                </div>
                <hr className="yellow-line"></hr>
                <h5>Some comment on the project</h5>
                <h4 className="description__details">Type: Feature Film</h4>
                <h4 className="description__details">Release Year: 2017</h4>
                <h4 className="description__details">Country: India</h4>
                <h4 className="title__song">Songs</h4>
                <div className="songs-list">
                  <div className="songs-list__left">
                    {songs.slice(0, halfSongs).map((song) => (
                      <div className="song-details">
                        <div className="row-1">
                          <p>{song.name}</p>
                          <p>{song.duration}</p>
                        </div>
                        <p>{song.genre}</p>
                      </div>
                    ))}
                  </div>
                  <div className="divider-2"></div>
                  <div className="songs-list__right">
                    {songs.slice(halfSongs, songs.length).map((song) => (
                      <div className="song-details">
                        <div className="row-1">
                          <p>{song.name}</p>
                          <p>{song.duration}</p>
                        </div>
                        <p>{song.genre}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider-3"></hr>
          <h3 className="film-festival-section">Film Festivals</h3>
          <div className="film-frames">
            <img classname="film-img" src={cannes} />
            <img classname="film-img" src={sydney} />
            <img classname="film-img" src={brussels} />
            <img classname="film-img" src={losAngeles} />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Sync;
