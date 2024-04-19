import React from "react";
import {faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    UnorderedList,
    Link, OrderedList,
} from "@chakra-ui/react";

import style from "./Footer.module.css";


function trackingLogoHome(label, url) {
    // Your tracking code here
    console.log(`Logo clicked with label: ${label} and url: ${url}`);
}

const Footer = () => {


    let d = new Date();
    const FullYear = d.getFullYear();
    // console.log('FullYear:', FullYear)

    return (
        <div className={style.MainContainerForFooter}>
            <div className={style.WidthDeciderFor_footer}>
                <div className={style.FooterContainer}>
                    <div className={style.lineCover} style={{width: "110%"}}></div>
                    <center>
                        <hr/>
                    </center>
                    <div className={style.FooterDivSection}>
                        <UnorderedList className={style.ItemMenu}>
                            <Link href="">
                                Trang Chủ
                            </Link>
                            <Link href="https://video.vnexpress.net/">
                                Video
                            </Link>
                            <Link href="https://vnexpress.net/podcast/">
                                Podcasts
                            </Link>
                            <Link href="https://vnexpress.net/anh/">
                                Ảnh
                            </Link>
                            <Link href="https://vnexpress.net/infographics/">
                                Infographics
                            </Link>
                            <div className={style.lightGreyLine} style={{width: "75%"}}></div>
                            <Link href="https://vnexpress.net/tin-tuc-24h/">
                                Mới nhất
                            </Link>
                            <Link href="https://vnexpress.net/tin-xem-nhieu/">
                                Xem nhiều
                            </Link>
                            <Link href="https://vnexpress.net/tin-nong/">
                                Tin nóng
                            </Link>
                        </UnorderedList>
                        <UnorderedList className={style.ItemMenu}>
                            <Link href="">
                                Thời sự
                            </Link>
                            <Link href="">
                                Góc nhìn
                            </Link>
                            <Link href="">
                                Thế giới
                            </Link>
                            <Link href="">
                                Kinh doanh
                            </Link>
                            <Link href="">
                                Bất động sản
                            </Link>
                            <Link href="">
                                Giải trí
                            </Link>
                        </UnorderedList>
                        <UnorderedList className={style.ItemMenu}>
                            <Link href="">
                                Thể thao
                            </Link>
                            <Link href="">
                                Pháp luật
                            </Link>
                            <Link href="">
                                Giáo dục
                            </Link>
                            <Link href="">
                                Sức khỏe
                            </Link>
                            <Link href="">
                                Đời sống
                            </Link>
                            <Link href="">
                                Du lịch
                            </Link>
                        </UnorderedList>

                        <UnorderedList className={style.ItemMenu}>
                            <Link href="">
                                Khoa học
                            </Link>
                            <Link href="">
                                Số hóa
                            </Link>
                            <Link href="">
                                Xe
                            </Link>
                            <Link href="">
                                Ý kiến
                            </Link>
                            <Link href="">
                                Tâm sự
                            </Link>
                            <Link href="">
                                Thư giãn
                            </Link>
                        </UnorderedList>
                        <UnorderedList>
                            <div className={style.verticalLine}>
                                <div className={style.ItemMenu} style={{
                                    flexDirection: "column",
                                }}>
                                    <Link href="">
                                        Rao vặt
                                    </Link>
                                    <Link href="">
                                        Startup
                                    </Link>
                                    <Link href="">
                                        Mua ảnh VnExpress
                                    </Link>
                                    <Link href="">
                                        eBox
                                    </Link>
                                </div>
                            </div>
                        </UnorderedList>
                        <OrderedList>
                            <div className={style.wrapContact}>
                                <div className={`${style.contact} ${style.ItemMenu}`}>
                                    <p>Tải ứng dụng</p>
                                    <div className={style.contactLinks}>
                                        <div className={style.box}>
                                            <Link href="#" title="VnExpress">
                                                VnExpress
                                            </Link>
                                        </div>
                                        <div className={style.box}>
                                            <Link  href="#" title="International">
                                                International
                                            </Link>
                                        </div>
                                    </div>
                                    <p>Liên hệ</p>
                                    <div className={style.contactLinks}>
                                        <a className={style.box}
                                           title="Liên hệ tòa soạn"
                                           href="https://vnexpress.net/lien-he-toa-soan">
                                            Tòa soạn
                                        </a>
                                        <a className={style.box} title="Liên hệ quảng cáo"
                                           href="https://eclick.vn/lien-he/?utm_source=VNE&amp;utm_medium=CPC_BOX&amp;utm_campaign=LienHeQuangCao">
                                            Quảng cáo
                                        </a>
                                    </div>
                                    <div style={{
                                        marginTop: "20px",
                                    }}>
                                        <a className={style.box} href="https://vlight.vnexpress.net/lien-he"
                                           title="Vlight">
                                            Hợp tác bản quyền
                                        </a>
                                        <div className={style.lightGreyLine}></div>
                                        <div>
                                            <p>Đường dây nóng</p>
                                            <div className={style.left}>
                                                <strong>083.888.0123</strong>
                                                <p>(Hà Nội)</p>
                                            </div>
                                            <div className={style.right}>
                                                <strong>082.233.3555</strong>
                                                <p>(TP. Hồ Chí Minh)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </OrderedList>

                    </div>
                </div>
                <div className={`${style.copyright} ${style.width_common}`}
                     style={{borderBottom: "1px solid #e5e5e5" ,width : "110%", borderTop: "1px solid #bdbdbd"}}>
                    <p style={{position: "relative", top: "10px"}}>
                        <a title="VnExpress - Báo tiếng Việt nhiều người xem nhất" href="https://vnexpress.net/"
                           data-medium="Logo" className="logo_ft"
                           onClick={() => trackingLogoHome('logo-footer', this.href)}
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Footer&amp;vn_medium=Logo&amp;vn_term=Desktop"
                           data-itm-added="1">
                            <div style={{display: 'flex', alignItems: 'center'}}>
                        <span style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            margin: "0px 8px 0 0",
                            color: "#222"
                        }}>Báo điện tử</span>
                                <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v879/v2_2019/pc/graphics/logo.svg"
                                     alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat"/>
                            </div>
                        </a>
                    </p>
                    <div className={style.right}>
                        <a href="https://vnexpress.net/dieu-khoan-su-dung" className={style.txtFollow}
                           title="Điều khoản sử dụng"
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Footer&amp;vn_medium=Menu-DieuKhoanSuDung&amp;vn_term=Desktop"
                           data-itm-added="1">Điều khoản sử dụng</a>
                        <a className={style.txtFollow} href="https://vnexpress.net/chinh-sach-bao-mat"
                           data-medium="Menu-ChinhSachBaoMat" title="Chính sách bảo mật"
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Footer&amp;vn_medium=Menu-ChinhSachBaoMat&amp;vn_term=Desktop"
                           data-itm-added="1">Chính sách bảo mật</a>
                        <a className={style.txtFollow} href="https://vnexpress.net/chinh-sach-cookies"
                           data-medium="Menu-Cookies" title="Cookies"
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Footer&amp;vn_medium=Menu-Cookies&amp;vn_term=Desktop"
                           data-itm-added="1">Cookies</a>
                        <a className={style.txtFollow} href="/rss" data-medium="Menu-Rss" title="RSS"
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Footer&amp;vn_medium=Menu-Rss&amp;vn_term=Desktop"
                           data-itm-added="1">RSS</a>
                        <span className={style.txtFollow} style={{marginLeft: "20px"}}>Theo dõi VnExpress trên</span>
                        <a href="https://www.facebook.com/congdongvnexpress/"
                           title="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com/VnEnews" className="social_ft twitter_ft" title="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.youtube.com/c/VnExpressOfficial"
                           className="social_ft youtube_ft" title="Youtube">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
                <center>
                    <hr/>
                </center>

                <div className={style.FooterBtmDiv}>
                    <div>
                        <p>
                            Copyright © {FullYear} The VietNam Express [P] Ltd. All Rights
                            Reserved
                        </p>
                    </div>
                    <div>
                        <div>
                            <a
                                href="https://vnexpress.net/"
                                rel="noopener noreferrer"
                                className="powered-by-wpcom"
                                target="_blank"
                                aria-label="Powered by vnexpress.net"
                            >
                                <img
                                    src="https://s1.vnecdn.net/vnexpress/restruct/i/v879/v2_2019/pc/graphics/logo.svg"
                                    alt="Powered by vnexpress.net"
                                    width="187"
                                    height="26"
                                    style={{marginTop : "10px"}}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
