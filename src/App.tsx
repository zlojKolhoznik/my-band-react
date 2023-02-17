import React from "react";
import "./App.css";

function App() {
    return (
        <>
            <h1 className="name">Жадан і Собаки</h1>
            <h2 className="title">Учасники</h2>
            <ul>
                <li className="member">
                    <a target="_blank" href="https://uk.wikipedia.org/wiki/Жадан_Сергій_Вікторович">Серігй Жадан - вокал</a>
                </li>
                <li className="member">
                    <a target="_blank" href="https://uk.wikipedia.org/wiki/Євген_Турчинов">Євген Турчинов - вокал, гітара</a>
                </li>
                <li className="member">Андрій Пивоваров - бас, вокал</li>
                <li className="member">Олександр Меренчук - тромбон</li>
                <li className="member">Віталій Бронішевський - ударні</li>
                <li className="member">Артем Дмитриченков - труба</li>
                <li className="member">Сергій Кулаєнко - клавішні</li>
            </ul>
            <h2 className="title">Альбоми</h2>
            <ul>
                <li className="album">
                    <h3 className="album-title">Спортивний клуб армії</h3>
                    <img src="./img/album1.jpg" alt="" className="album-cover" />
                    <div className="links">
                        <a
                            target="_blank"
                            href="https://youtube.com/playlist?list=PLApOv1KMVsBt0pTKxmcrzWAa-DW2FYFH2"
                            className="album-link">
                            <img src="./img/youtube.png" alt="" />
                        </a>
                    </div>
                </li>
                <li className="album">
                    <h3 className="album-title">Зброя пролетаріату</h3>
                    <img src="./img/album2.jpg" alt="" className="album-cover" />
                    <div className="links">
                        <a
                            target="_blank"
                            href="https://youtube.com/playlist?list=PLApOv1KMVsBtgaU-PHcV2dh8yjZJYn_yS"
                            className="album-link">
                            <img src="./img/youtube.png" alt="" />
                        </a>
                    </div>
                </li>
                <li className="album">
                    <h3 className="album-title">Бийся за неї</h3>
                    <img src="./img/album3.jpg" alt="" className="album-cover" />
                    <div className="links">
                        <a
                            target="_blank"
                            href="https://youtube.com/playlist?list=PLApOv1KMVsBuOHT0EMszYWwyXrdSI5rYQ"
                            className="album-link">
                            <img src="./img/youtube.png" alt="" />
                        </a>
                    </div>
                </li>
                <li className="album">
                    <h3 className="album-title">Пси</h3>
                    <img src="./img/album4.jpg" alt="" className="album-cover" />
                    <div className="links">
                        <a
                            target="_blank"
                            href="https://music.youtube.com/playlist?list=OLAK5uy_kGrN16ADXZcotTz0DhVnGFDaVeMBctWOc&feature=share"
                            className="album-link">
                            <img src="./img/youtube-music.png" alt="" />
                        </a>
                        <a
                            target="_blank"
                            href="https://open.spotify.com/album/0EZFptfJlX9rq74Y4tsD1I?si=R6DxdNoATSyWokjzI2OSPQ"
                            className="album-link">
                            <img src="./img/spotify.png" alt="" />
                        </a>
                        <a
                            target="_blank"
                            href="https://youtube.com/playlist?list=OLAK5uy_kDD6F_aw4OPdOpat8-WS2Fhn4c8hbqKHU"
                            className="album-link">
                            <img src="./img/youtube.png" alt="" />
                        </a>
                    </div>
                </li>
                <li className="album">
                    <h3 className="album-title">Мадонна</h3>
                    <img src="./img/album5.jpg" alt="" className="album-cover" />
                    <div className="links">
                        <a
                            target="_blank"
                            href="https://music.youtube.com/playlist?list=OLAK5uy_k2Rbwa4WbGUS4CbAh1ZgW2CvKeFOyJ9IE&feature=share"
                            className="album-link">
                            <img src="./img/youtube-music.png" alt="" />
                        </a>
                        <a
                            target="_blank"
                            href="https://open.spotify.com/album/7tiVSGCksT94Bwf2uj4ON7?si=y8Yhv4tFTFWEJ69r3cNXUA"
                            className="album-link">
                            <img src="./img/spotify.png" alt="" />
                        </a>
                        <a
                            target="_blank"
                            href="https://youtube.com/playlist?list=OLAK5uy_kVcGiQq2Bhx93q3mc4EPksRFWkXMR6M9M"
                            className="album-link">
                            <img src="./img/youtube.png" alt="" />
                        </a>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default App;

