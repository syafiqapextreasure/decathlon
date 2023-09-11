import React from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./dataGrid.scss";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";



const IndicatorGrid = () => {
  const current_year = new Date().getFullYear();
  const getWeeksInMonth = (year, month) => {
  
    const weeks = [];
    const firstDay = new Date(year, month -1 , 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    let dayOfWeek = firstDay.getDay();
    let start;
    let end;
  
    for (let i = 1; i < daysInMonth + 1; i++) {
  
      if (dayOfWeek === 1 || i === 1) {
        start = i;
      }
  
      if (dayOfWeek === 0 || i === daysInMonth) {
  
        end = i;
  
        if(start){
          if (end - start >= 3){
            weeks.push({
              'start': start,
              'end': end
            });
          }
          start = null;
        }
      }
  
      dayOfWeek = new Date(year, month - 1, i + 1).getDay();
    }
    return weeks.length;
  }
  return (
    <div>
    <div className="custom-grid">
      <table>

        <tr>
          <th className="top border-none" colspan="5" ></th>
          <th className="top header-black" colspan={getWeeksInMonth(current_year, 1) * 2}>January {current_year}</th>
          <th className="top" colspan={getWeeksInMonth(current_year, 2) * 2}>February {current_year}</th>
          <th className="top header-black" colspan={getWeeksInMonth(current_year, 3) * 2}>March {current_year}</th>
          <th className="top" colspan={getWeeksInMonth(current_year, 4) * 2}>April {current_year}</th>
          <th className="top header-black" colspan={getWeeksInMonth(current_year, 5) * 2}>May {current_year}</th>
          <th className="top" colspan={getWeeksInMonth(current_year, 6) * 2}>June {current_year}</th>
          <th className="top header-black" colspan={getWeeksInMonth(current_year, 7) * 2}>July {current_year}</th>
          <th className="top" colspan={getWeeksInMonth(current_year, 8) * 2}>August {current_year}</th>
          <th className="top header-black" colspan={getWeeksInMonth(current_year, 9) * 2}>September {current_year}</th>
          <th className="top" colspan={getWeeksInMonth(current_year, 10) * 2}>Octorber {current_year}</th>
          <th className="top header-black" colspan={getWeeksInMonth(current_year, 11) * 2}>November {current_year}</th>
          <th className="top" colspan={getWeeksInMonth(current_year, 12) * 2}>December {current_year}</th>
        </tr>

        <tr>
          <th className="border-none"></th>
          <th className="border-none"></th>
          <th className="border-none"></th>
          <th colspan="2" className="border-none"></th>
          <th colspan="2" className="header-green">W1</th>
          <th colspan="2" className="header-orange">W2</th>
          <th colspan="2" className="header-red">W3</th>
          <th colspan="2" className="header-red">W4</th>
          <th colspan="2" className="header-red">W5</th>
          <th colspan="2" className="header-red">W6</th>
          <th colspan="2" className="header-orange">W7</th>
          <th colspan="2" className="header-orange">W8</th>
          <th colspan="2" className="header-red">W9</th>
          <th colspan="2" className="header-red">W10</th>
          <th colspan="2" className="header-orange">W11</th>
          <th colspan="2" className="header-orange">W12</th>
          <th colspan="2" className="header-red">W13</th>
          <th colspan="2" className="header-red">W14</th>
          <th colspan="2" className="header-orange">W15</th>
          <th colspan="2" className="header-orange">W16</th>
          <th colspan="2" className="header-red">W17</th>
          <th colspan="2" className="header-red">W18</th>
          <th colspan="2" className="header-orange">W19</th>
          <th colspan="2" className="header-orange">W20</th>
          <th colspan="2" className="header-red">W21</th>
          <th colspan="2" className="header-red">W22</th>
          <th colspan="2" className="header-orange">W23</th>
          <th colspan="2" className="header-orange">W24</th>
          <th colspan="2" className="header-red">W25</th>
          <th colspan="2" className="header-red">W26</th>
          <th colspan="2" className="header-orange">W27</th>
          <th colspan="2" className="header-orange">W28</th>
          <th colspan="2" className="header-red">W29</th>
          <th colspan="2" className="header-red">W30</th>
          <th colspan="2" className="header-orange">W31</th>
          <th colspan="2" className="header-orange">W32</th>
          <th colspan="2" className="header-red">W33</th>
          <th colspan="2" className="header-red">W34</th>
          <th colspan="2" className="header-orange">W35</th>
          <th colspan="2" className="header-orange">W36</th>
          <th colspan="2" className="header-red">W37</th>
          <th colspan="2" className="header-red">W38</th>
          <th colspan="2" className="header-orange">W39</th>
          <th colspan="2" className="header-orange">W40</th>
          <th colspan="2" className="header-red">W41</th>
          <th colspan="2" className="header-red">W42</th>
          <th colspan="2" className="header-orange">W43</th>
          <th colspan="2" className="header-orange">W44</th>
          <th colspan="2" className="header-red">W45</th>
          <th colspan="2" className="header-red">W46</th>
          <th colspan="2" className="header-orange">W47</th>
          <th colspan="2" className="header-orange">W48</th>
          <th colspan="2" className="header-red">W49</th>
          <th colspan="2" className="header-red">W50</th>
          <th colspan="2" className="header-orange">W51</th>
          <th colspan="2" className="header-orange">W52</th>
        </tr>
        <tr>
          <th className="w-50 border-none"></th>
          <th className="header-gray">Act</th>
          <th className="header-gray">Pilot</th>
          <th colspan="2">Total</th>
          <th colspan="2">Rank11</th>
          <th colspan="2">Rank2</th>
          <th colspan="2">Rank40</th>
          <th colspan="2">Rank5</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
          <th colspan="2">Rank22</th>
          <th colspan="2">Rank1</th>
          <th colspan="2">Rank12</th>
          <th colspan="2">Rank10</th>
        </tr>

        <tr>
          <th className="start header-black">Item</th>
          <th className="header-gray" colspan="2">P/H</th>
          <th colspan="2" className="header-black">Total</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
          <th colspan="2" className="header-black">Pilot</th>
        </tr>

        <tr>
          <td className="start">Y-1 TO (RM)</td>
          <td>-</td>
          <td>-</td>
          <td colspan="2">-</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
        </tr>
        <tr>
          <td className="start">TO (RM)</td>
          <td>-</td>
          <td>-</td>
          <td colspan="2">-</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
        </tr>
        <tr>
          <td className="start">TO/Hours (RM/H)</td>
          <td>-</td>
          <td>-</td>
          <td colspan="2">-</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
        </tr>
        <tr>
          <td className="start">Hours(H)</td>
          <td>-</td>
          <td>-</td>
          <td colspan="2">-</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
        </tr>
        <tr>
          <td className="start">Sum TO (RM)</td>
          <td>-</td>
          <td>-</td>
          <td colspan="2">-</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
        </tr>
        <tr>
          <td className="start">Sum Hours (H)</td>
          <td>-</td>
          <td>-</td>
          <td colspan="2">-</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
        </tr>
        <tr>
          <td className="start" colspan='3'>Difference Hours (H)</td>
          <td colspan="2">-126.45</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">62000</td>
          <td colspan="2">65000</td>
          <td colspan="2">72000</td>
          <td colspan="2">75990</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
          <td colspan="2">77723</td>
          <td colspan="2">69000</td>
          <td colspan="2">68000</td>
          <td colspan="2">70050</td>
        </tr>

        <tr>
          <td colSpan="3"></td>
          <td colSpan="2" className="header-gray">Indicators</td>
        </tr>

        <tr>
          <td colSpan="3" className="start color-red">KIV</td>
          <td>0</td>
          <td>63</td>
        </tr>
        <tr>
          <td colSpan="3" className="start">Sum Hours(H)</td>
          <td >0</td>
          <td >5</td>
        </tr>

        <tr>
          <td className="start" rowSpan="2">Total</td>
          <td colSpan="2">Hours</td>
          <td colSpan={"2"}>5200</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
          <td colSpan={"2"}>100</td>
        </tr>
        <tr>
          <td >AL</td>
          <td >MC</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
          <td >20</td>
        </tr>

        <tr>
          <th className="start color-green">CDI</th>
          <th colspan="4" className="w-15 start color-green">ECARTS</th>
          <th className="border-none color-green" colSpan="104"></th>
        </tr>
        <tr>
          <td className="start border-bottom-none">Kazim Ahmad</td>
          <td colSpan="2" >2080</td>
          <td colSpan="2">195</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
        </tr>
        <tr>
          <td className="start border-top-none">FT Annual Leaves 112H</td>
          <td >112</td>
          <td >16</td>
          <td className="bg-red">0</td>
          <td >8</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
        </tr>
        <tr>
          <td className="start border-bottom-none">Ahmad Hakimi</td>
          <td colSpan="2" >2080</td>
          <td colSpan="2">195</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
        </tr>
        <tr>
          <td className="start border-top-none">FT Annual Leaves 25</td>
          <td >112</td>
          <td >16</td>
          <td className="bg-red">0</td>
          <td >8</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
        </tr>
        <tr>
          <td className="start border-bottom-none">Kazim Ahmad</td>
          <td colSpan="2" >2080</td>
          <td colSpan="2">195</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
        </tr>
        <tr>
          <td className="start border-top-none">PT Annual Leaves 0</td>
          <td >112</td>
          <td >16</td>
          <td className="bg-red">0</td>
          <td >8</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
        </tr>
        <tr>
          <td className="start border-bottom-none">Kazim Ahmad</td>
          <td colSpan="2" >2080</td>
          <td colSpan="2">195</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
        </tr>
        <tr>
          <td className="start border-top-none">FT Annual Leaves 112H</td>
          <td >112</td>
          <td >16</td>
          <td className="bg-red">0</td>
          <td >8</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
        </tr>
        <tr className="bg-grey">
          <th className="start border-none" colSpan="5">
            <div className="inactive-members">
                <div >
                    Inactive Members 
                </div>
                <div>
                <KeyboardArrowDownOutlined />
                </div>
            </div>
          </th>
          <th className="border-none" colSpan="104"></th>
        </tr>
        <tr className="bg-grey">
          <td className="start border-bottom-none">Teammate Name</td>
          <td colSpan="2" ></td>
          <td colSpan="2" className="color-white">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
        </tr>
        <tr className="bg-grey">
          <td className="start border-top-none">FT Annual Leaves 0H</td>
          <td >-17</td>
          <td >0</td>
          <td className="color-white">11</td>
          <td >70</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >16</td>
          <td >8</td>
          <td >16</td>
          <td >0</td>
          <td >16</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
          <td >0</td>
        </tr>
      </table>
    </div>
    </div>
  )
}

export default IndicatorGrid
