import React from "react";
import {
    ListItem,
    UnorderedList,
    Wrap,
    WrapItem,
    Avatar,
    Link, OrderedList,
} from "@chakra-ui/react";

import style from "./FOOTER_CSS/Footer.module.css";


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
                                            <a src="../assets/core-img/logo.png" href="#" title="VnExpress">
                                                VnExpress
                                            </a>
                                        </div>
                                        <div className={style.box}>
                                            <a src="../assets/core-img/logo.png" href="#" title="International">
                                                International
                                            </a>
                                        </div>
                                    </div>
                                    <p>Liên hệ</p>
                                    <div className={style.contactLinks}>
                                        <a className={style.box} data-medium="Menu-LienHeToaSoan"
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
                <div className={style.lineCover} style={{width: "110%"}}></div>
                <div className="copyright width_common"
                     style={{borderBottom: "1px solid #e5e5e5", borderTop: "1px solid #bdbdbd"}}>
                    <p style={{position: "relative", top: "3px"}}>
                        <a title="VnExpress - Báo tiếng Việt nhiều người xem nhất" href="https://vnexpress.net/"
                           data-medium="Logo" className="logo_ft"
                           onClick={() => trackingLogoHome('logo-footer', this.href)}
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Footer&amp;vn_medium=Logo&amp;vn_term=Desktop"
                           data-itm-added="1">
                            <span style={{
                                display: "inline-block",
                                verticalAlign: "top",
                                margin: "5px 8px 0 0",
                                color: "#222"
                            }}>Báo điện tử</span>
                            <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v879/v2_2019/pc/graphics/logo.svg"
                                 alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat"/>
                        </a>
                    </p>
                    <div className="right flexbox">
                        <a href="https://vnexpress.net/dieu-khoan-su-dung" data-medium="Menu-DieuKhoanSuDung"
                           title="Điều khoản sử dụng"
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Footer&amp;vn_medium=Menu-DieuKhoanSuDung&amp;vn_term=Desktop"
                           data-itm-added="1">Điều khoản sử dụng</a>
                        <a className="txt-follow" href="https://vnexpress.net/chinh-sach-bao-mat"
                           data-medium="Menu-ChinhSachBaoMat" title="Chính sách bảo mật"
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Footer&amp;vn_medium=Menu-ChinhSachBaoMat&amp;vn_term=Desktop"
                           data-itm-added="1">Chính sách bảo mật</a>
                        <a className="txt-follow" href="https://vnexpress.net/chinh-sach-cookies"
                           data-medium="Menu-Cookies" title="Cookies"
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Footer&amp;vn_medium=Menu-Cookies&amp;vn_term=Desktop"
                           data-itm-added="1">Cookies</a>
                        <a className="txt-follow" href="/rss" data-medium="Menu-Rss" title="RSS"
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Footer&amp;vn_medium=Menu-Rss&amp;vn_term=Desktop"
                           data-itm-added="1">RSS</a>
                        <span className="txt-follow">Theo dõi VnExpress trên</span>
                        <a href="https://www.facebook.com/congdongvnexpress/" className="social_ft face_ft"
                           title="Facebook">
                            {/* Replace with your Facebook SVG or Component */}
                        </a>
                        <a href="https://twitter.com/VnEnews" className="social_ft twitter_ft" title="Twitter">
                            {/* Replace with your Twitter SVG or Component */}
                        </a>
                        <a target="_blank"
                           href="https://www.youtube.com/channel/UCVRqZH5QnrnbMWhElPBD-MQ?sub_confirmation=1"
                           className="social_ft youtube_ft" title="Youtube">
                            {/* Replace with your Youtube SVG or Component */}
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
                                rel="noopener"
                                className="powered-by-wpcom"
                                target="_blank"
                                aria-label="Powered by vnexpress.net"
                            >
                                <img
                                    src="https://s1.vnecdn.net/vnexpress/restruct/i/v879/v2_2019/pc/graphics/logo.svg"
                                    alt="Powered by vnexpress.net"
                                    width="187"
                                    height="26"
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
