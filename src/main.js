import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Age} from './../src/ages.js';

$(document).ready(function(){
    let myAge = new Age(21);
    myAge.toJupiter;
});