const firstname = (slug) => {
    let result = "";
    switch (slug) {
        case "thoi-su":
            result = "Thời sự";
            break;
        case "goc-nhin":
            result = "Góc nhìn";
            break;
        case "the-gioi":
            result = "Thế giới";
            break;
        case "video":
            result = "Video";
            break;
        case "podcasts":
            result = "Podcasts";
            break;
        case "kinh-doanh":
            result = "Kinh doanh";
            break;
        case "bat-dong-san":
            result = "Bất động sản";
            break;
        case "khoa-hoc":
            result = "Khoa học";
            break;
        case "giai-tri":
            result = "Giải trí";
            break;
        case "the-thao":
            result = "Thể thao";
            break;
        case "phap-luat":
            result = "Pháp luật";
            break;
        case "giao-duc":
            result = "Giáo dục";
            break;
        case "suc-khoe":
            result = "Sức khỏe";
            break;
        case "doi-song":
            result = "Đời sống";
            break;
        case "du-lich":
            result = "Du lịch";
            break;
        case "xe":
            result = "Xe";
            break;
        case "y-kien":
            result = "Ý kiến";
            break;
        case "tam-su":
            result = "Tâm sự";
            break;
        case "thu-gian":
            result = "Thư giãn";
            break;
        default:
            result = slug;
            break;
    }
    return result
};

export default firstname;