/*
    COMP229-MIDTERM-301226808-CymanthaDiesel
    Cymantha Diesel
    301226808
    Midterm - Book List 
*/

export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}