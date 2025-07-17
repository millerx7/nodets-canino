import { Request, Response } from 'express';

export const home = (req:  Request, res: Response) => {
    res.send('Hello word, home!')

    //res.render('pages/page');
}
export const dogs = (req:  Request, res: Response) => {
    res.send('Hello word, dogs!')
    //res.render('pages/page');
}
export const cats = (req:  Request, res: Response) => {
    res.send('Hello word, cats!')
    //res.render('pages/page');
}
export const fishes = (req:  Request, res: Response) => {
    res.send('Hello word, fishes!')
    //res.render('pages/page');
}