import { NavNavbar } from "../../components/NavNavbar/NavNavbar"
import "././style.css"
export const HomePages = () => {
    return (
        <div className="container">
        <nav className="nav-bar">
            <NavNavbar/>
        </nav>
            <section className="section-1">
                <div className="wrapper-welcome">
                    <h1>SELAMAT DATANG DI SCHOLARMATE</h1>
                </div>
            </section>
                <div className="bot-text">
                    <h2>Temukan jalan anda untuk meraih impian melalui beasiswa dan perencanaan sejak dini</h2>
                </div>

            <section className="section-2">
                <div className="latar-bel">
                    <h2>LATAR BELAKANG</h2>
                </div>
                <div className="latar-bel-text-container">
                    <div className="latar-bel-text">
                        <p>Masa Perkuliahan adalah masa yang sangat penting dan berperan besar dalam penentuan karir seseorang. Namun, nampaknya masih banyak orang menyepelekan pemilihan jurusan atau program studi. Mahasiswa yang telalh lulus seringkali tidak mengetahui jenjang karir apa yang dapat ditempuh.</p>
                    </div>
                </div>
            </section>

            <section className="section-3">
                <div className="fitur-unggulan">
                    <h2>FITUR UNGGULAN</h2>
                </div>
                <div className="fitur-unggulan">
                    <div className="square-container">
                        <div className="square">
                            <div className="square-text">Pencarian Beasiswa</div>
                            <div className="square-text-exp">Pada fitur ini , User dapat mencari beasiswa yang tersedia berdasarkan kriteria (Prodi, negara tujuan, dll) tertentu yang dapat dipilih oleh user. </div>
                            <button className="see-more-1">See more</button>
                        </div>
                        <div className="square">
                            <div className="square-text">Profil Jurusan</div>
                            <div className="square-text-exp">Pada fitur ini , User dapat mencari jurusan yang ingin dituju dengan cara memilih cards yang tersedia maupun menelusuri di search menu, untuk mengetahui informasi lengkap mengenai jurusan tersebut.</div>
                            <button className="see-more-2">See more</button>
                        </div>
                        <div className="square">
                            <div className="square-text">Prospek Karir</div>
                            <div className="square-text-exp">Pada fitur ini , User dapat mencari informasi mengenai jenjang karir yang akan dijalani oleh mahasiswa setelah lulus dari jurusan tertentu.</div>
                            <button className="see-more-3">See more</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-4">
                <div className="about-us">
                    <h2>TENTANG KAMI</h2>
                </div>
                <div className="about-us-text-container">
                    <div className="about-us-text">
                    Selamat datang di ScholarMate! Kami adalah platform online yang didedikasikan untuk membantu para pelajar, mahasiswa, dan profesional muda dalam mencari informasi tentang beasiswa di seluruh dunia. Kami percaya bahwa pendidikan adalah kunci untuk mencapai potensi penuh seseorang, dan dengan memberikan akses yang lebih mudah ke informasi tentang beasiswa, kami berharap dapat mewujudkan impian pendidikan bagi banyak individu.
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-container">
                    <div className="abt-scholar">Tentang ScholarMate</div>
                    <div className="call-us">Hubungi Kami</div>
                    <div className="phone"><span><img src="https://unpkg.com/@fortawesome/fontawesome-free@5.15.3/svgs/solid/phone.svg"/>021-345678</span></div>
                    <div className="email"><span><img src="https://unpkg.com/@fortawesome/fontawesome-free@5.15.3/svgs/solid/envelope.svg"/>cs@scholarmate.com</span></div>
                </div>
            </footer>
       </div>

    )
}