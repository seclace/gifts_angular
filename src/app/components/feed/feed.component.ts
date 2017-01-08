import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {FeedService} from "../../services/feed.service";

const feeds = [
    {
        id: 1,
        title: 'Слоник',
        content: 'Слоники своими руками, Слоники своими руками',
        image_url: 'https://pp.vk.me/c307703/v307703120/d559/1gVVyXHH6EI.jpg',
        isNew: true,
        added: false,
        voted: false,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 2,
        title: 'Кролик',
        content: 'Кролик своими руками, Кролик своими руками',
        image_url: 'http://magspace.ru/uploads/2009/03/11/08-58007_02145222552.jpg',
        isNew: true,
        added: false,
        voted: false,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 3,
        title: 'Огурец',
        content: 'Огурец своими руками, Огурец своими руками',
        image_url: 'http://photosflowery.ru/photo/ab/abd17c8b2d8a1e01c52a0bcea1d654c1.jpg',
        isNew: false,
        added: false,
        voted: false,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 4,
        title: 'Котик',
        content: 'Котик своими руками, Котик своими руками',
        image_url: 'http://www.krasfun.ru/images/2010/10/a5b92_1286309651_doseng.org_1285881319_51.jpg',
        isNew: false,
        added: false,
        voted: false,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 5,
        title: 'Слоник',
        content: 'Слоники своими руками, Слоники своими руками',
        image_url: 'https://pp.vk.me/c307703/v307703120/d559/1gVVyXHH6EI.jpg',
        isNew: false,
        added: false,
        voted: false,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 6,
        title: 'Кролик',
        content: 'Кролик своими руками, Кролик своими руками',
        image_url: 'http://magspace.ru/uploads/2009/03/11/08-58007_02145222552.jpg',
        isNew: false,
        added: true,
        voted: true,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 7,
        title: 'Огурец',
        content: 'Огурец своими руками, Огурец своими руками',
        image_url: 'http://photosflowery.ru/photo/ab/abd17c8b2d8a1e01c52a0bcea1d654c1.jpg',
        isNew: true,
        added: false,
        voted: false,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 9,
        title: 'Слоник',
        content: 'Слоники своими руками, Слоники своими руками',
        image_url: 'https://pp.vk.me/c307703/v307703120/d559/1gVVyXHH6EI.jpg',
        isNew: false,
        added: false,
        voted: false,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 10,
        title: 'Кролик',
        content: 'Кролик своими руками, Кролик своими руками',
        image_url: 'http://magspace.ru/uploads/2009/03/11/08-58007_02145222552.jpg',
        isNew: false,
        added: false,
        voted: false,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 11,
        title: 'Огурец',
        content: 'Огурец своими руками, Огурец своими руками',
        image_url: 'http://photosflowery.ru/photo/ab/abd17c8b2d8a1e01c52a0bcea1d654c1.jpg',
        isNew: false,
        added: true,
        voted: true,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 12,
        title: 'Котик',
        content: 'Котик своими руками, Котик своими руками',
        image_url: 'http://www.krasfun.ru/images/2010/10/a5b92_1286309651_doseng.org_1285881319_51.jpg',
        isNew: false,
        added: true,
        voted: true,
        votes_count: 5,
        curClass: '',
    },
    {
        id: 8,
        title: 'Котик',
        content: 'Котик своими руками, Котик своими руками',
        image_url: 'http://www.krasfun.ru/images/2010/10/a5b92_1286309651_doseng.org_1285881319_51.jpg',
        isNew: false,
        added: true,
        voted: true,
        votes_count: 5,
        curClass: '',
    },
];

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    feeds = [];

    watchCard(id) {
        setTimeout(() => this.feeds.find((i) => i.id === id).isNew = false, 1000);
    }

    addCardToCollection(id) {
        this.feeds.find((i) => i.id === id).added = true;
        return false;
    }

    removeCardFromCollection(id) {
        this.feeds.find((i) => i.id === id).added = false;
        return false;
    }

    vote(id) {
        const currentFeed = this.feeds.find((i) => i.id === id);
        if (currentFeed.voted) {
            currentFeed.voted = false;
            currentFeed.votes_count--;
            currentFeed.curClass = 'removed';
        } else {
            currentFeed.voted = true;
            currentFeed.votes_count++;
            currentFeed.curClass = 'added';
        }
        setTimeout(() => currentFeed.curClass = '', 3000);
        return false;
    }

    constructor(private feedService: FeedService) {
        this.feeds = feedService.getFeed();
    }

    ngOnInit() {
        // const http = Http;
        // http.get('http://localhost:8000/get')
        //     .subscribe(res => this.feeds = [...res.json(), ...this.feeds]);
    }

}
