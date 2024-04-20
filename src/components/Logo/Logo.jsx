import style from "./Logo.module.css";
import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import {Link} from "@chakra-ui/react";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";


// Define the trackingLogoHome function
const trackingLogoHome = (label, href) => {
    console.log(`Logo clicked with label: ${label} and href: ${href}`);
};

function OuterFunction() {
    const [city, setCity] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=YOUR_API_KEY`);
                const data = await response.json();
                if (data.results && data.results[0] && data.results[0].components) {
                    setCity(data.results[0].components.city);
                } else {
                    console.log("Unexpected API response", data);
                }
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);

    return <div>{city}</div>;
}

var objToday = new Date(),
    weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = (function () {
        var a = objToday;
        if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
        a = parseInt((a + "").charAt(1));
        return 1 === a ? "" : 2 === a ? "" : 3 === a ? "" : "";
    })(),
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    dayOfMonth =
        (objToday.getDate() < 10)
            ? "0" + objToday.getDate() + domEnder
            : objToday.getDate() + domEnder,
    today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ",  " + curYear;



const Logo = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const searchBoxRef = useRef(null);

    const handleClickOutside = (event) => {
        if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
            setShowSearch(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className={style.Media_logo}>
            <div className={style.LogoBody}>
                <div className={style.FollowLinks}>
                    <h1>
                        <a href="/" data-medium="Logo" className={style.logo}
                           title="VnExpress - Báo tiếng Việt nhiều người xem nhất"
                           onClick={() => trackingLogoHome('logo-header', this.href)}
                           data-itm-source="#vn_source=Home&amp;vn_campaign=Header&amp;vn_medium=Logo&amp;vn_term=Desktop"
                           data-itm-added="1">
                            <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v879/v2_2019/pc/graphics/logo.svg"
                                 alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat"/>
                        </a>
                    </h1>
                </div>
                <div className={style.timeNow}>
                    {today}
                </div>
                <div className={style.timeNow}>
                    <OuterFunction/>
                    {today}
                </div>
                <div className={style.timeNow}>
                    <label><FontAwesomeIcon icon={faSun}/></label>
                </div>

            </div>
            <div className={style.LogoBody}>
                <div className={style.timeNow} style={{border: "none"}}>
                    <Link href="https://vnexpress.net/tin-tuc-24h" title="Mới nhất">
                        Mới nhất
                    </Link>
                </div>
                <button className={style.timeNow} onClick={() => setShowOptions(!showOptions)}>
                    Tin theo khu vực
                    {showOptions && (
                        <div className={style.dropdown}>
                            <div>Hà Nội</div>
                            <div>TP. HCM</div>
                        </div>
                    )}
                </button>
                <div className={style.timeNow}>
                    <img
                        src="https://media.licdn.com/dms/image/C560BAQEhWRrdDij_JA/company-logo_200_200/0/1630624121989/vne_logo?e=1721865600&v=beta&t=p_umQRoxS1L9f5WC-_QdQbggAEQz-RPR4bfA5pDTFl4"
                        style={{width: "25px", height: "25px",  marginRight: "5px"}}
                        alt="International"
                    />
                    International
                </div>
                <button className={style.timeNow} onClick={() => setShowSearch(!showSearch)}>
                    <label><FontAwesomeIcon icon={faSearch}/></label>
                    {showSearch && (
                        <div className={`${style.dropdown} ${showSearch ? 'show' : ''}`} ref={searchBoxRef}>
                            <input type="text" placeholder="Search..."/>
                        </div>
                    )}
                </button>
                <div className={style.timeNow}>
                    <label><FontAwesomeIcon icon={faUserAlt}/></label>
                    <a style={{marginLeft: "8px"}}>
                        Đăng nhập
                    </a>
                    <a style={{marginLeft: "16px"}}>
                        <label><FontAwesomeIcon icon={faBell}/></label>

                    </a>
                </div>

            </div>
        </div>
    );
};

export default Logo;