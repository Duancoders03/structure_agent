exports.index = (req, res) => {
    res.render('home/views/index', {
        title: 'GreenLife - Cây cảnh trực tuyến',
        message: 'Chào mừng bạn đến với GreenLife!'
    });
};

exports.about = (req, res) => {
    res.render('home/views/about', {
        title: 'Về chúng tôi - GreenLife'
    });
};

exports.contact = (req, res) => {
    res.render('home/views/contact', {
        title: 'Liên hệ - GreenLife'
    });
};
