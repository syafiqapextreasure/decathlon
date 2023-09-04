import React from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./dataGrid.scss";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";


const IndicatorGrid = () => {

  return (
    <div>
    <div className="custom-grid">
      <table>

        <tr>
          <th className="top border-none" colspan="4" ></th>
          <th className="top header-black" colspan="4">January 2023</th>
          <th className="top" colspan="4">February 2023</th>
          <th className="top header-black" colspan="4">March 2023</th>
          <th className="top" colspan="4">April 2023</th>
          <th className="top header-black" colspan="4">May 2023</th>
          <th className="top" colspan="4">June 2023</th>
          <th className="top header-black" colspan="4">July 2023</th>
          <th className="top" colspan="4">August 2023</th>
          <th className="top header-black" colspan="4">September 2023</th>
          <th className="top" colspan="4">Octorber 2023</th>
          <th className="top header-black" colspan="4">November 2023</th>
          <th className="top" colspan="4">December 2023</th>
        </tr>

        <tr>
          <th className="border-none"></th>
          <th className="border-none"></th>
          <th className="border-none"></th>
          <th className="border-none"></th>
          <th className="header-green">W1</th>
          <th className="header-orange">W2</th>
          <th className="header-red">W3</th>
          <th className="header-red">W4</th>
          <th className="header-red">W5</th>
          <th className="header-red">W6</th>
          <th className="header-orange">W7</th>
          <th className="header-orange">W8</th>
          <th className="header-red">W9</th>
          <th className="header-red">W10</th>
          <th className="header-orange">W11</th>
          <th className="header-orange">W12</th>
          <th className="header-red">W13</th>
          <th className="header-red">W14</th>
          <th className="header-orange">W15</th>
          <th className="header-orange">W16</th>
          <th className="header-red">W17</th>
          <th className="header-red">W18</th>
          <th className="header-orange">W19</th>
          <th className="header-orange">W20</th>
          <th className="header-red">W21</th>
          <th className="header-red">W22</th>
          <th className="header-orange">W23</th>
          <th className="header-orange">W24</th>
          <th className="header-red">W25</th>
          <th className="header-red">W26</th>
          <th className="header-orange">W27</th>
          <th className="header-orange">W28</th>
          <th className="header-red">W29</th>
          <th className="header-red">W30</th>
          <th className="header-orange">W31</th>
          <th className="header-orange">W32</th>
          <th className="header-red">W33</th>
          <th className="header-red">W34</th>
          <th className="header-orange">W35</th>
          <th className="header-orange">W36</th>
          <th className="header-red">W37</th>
          <th className="header-red">W38</th>
          <th className="header-orange">W39</th>
          <th className="header-orange">W40</th>
          <th className="header-red">W41</th>
          <th className="header-red">W42</th>
          <th className="header-orange">W43</th>
          <th className="header-orange">W44</th>
          <th className="header-red">W45</th>
          <th className="header-red">W46</th>
          <th className="header-orange">W47</th>
          <th className="header-orange">W48</th>
        </tr>
        <tr>
          <th className="w-50 border-none"></th>
          <th className="header-gray">Act</th>
          <th className="header-gray">Pilot</th>
          <th>Total</th>
          <th>Rank11</th>
          <th>Rank2</th>
          <th>Rank40</th>
          <th>Rank5</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
          <th>Rank22</th>
          <th>Rank1</th>
          <th>Rank12</th>
          <th>Rank10</th>
        </tr>

        <tr>
          <th className="start header-black">Item</th>
          <th className="header-gray" colspan="2">P/H</th>
          <th className="header-black">Total</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
          <th className="header-black">Pilot</th>
        </tr>

        <tr>
          <td className="start">Y-1 TO (RM)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
        </tr>
        <tr>
          <td className="start">TO (RM)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
        </tr>
        <tr>
          <td className="start">TO/Hours (RM/H)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
        </tr>
        <tr>
          <td className="start">Hours(H)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
        </tr>
        <tr>
          <td className="start">Sum TO (RM)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
        </tr>
        <tr>
          <td className="start">Sum Hours (H)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
        </tr>
        <tr>
          <td className="start">Difference Hours (H)</td>
          <td ></td>
          <td ></td>
          <td >-126.45</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
          <td>62000</td>
          <td>65000</td>
          <td>72000</td>
          <td>75990</td>
          <td>77723</td>
          <td>69000</td>
          <td>68000</td>
          <td>70050</td>
        </tr>

        <tr>
          <td></td>
          <td colSpan="2" className="header-gray">Indicators</td>
        </tr>

        <tr>
          <td className="start color-red">KIV</td>
          <td >0</td>
          <td >63</td>
        </tr>


        <tr>
          <td className="start" rowSpan="2">Total</td>
          <td colSpan="2">Hours</td>
          <td  >5200</td>
          <td >100</td>
          <td >100</td>
          <td >100</td>
          <td >100</td>
          <td >100</td>
          <td >100</td>
          <td >100</td>
          <td >100</td>
        </tr>

        <tr>
          <td >AL</td>
          <td >MC</td>
          <td >
            <div className="flex">
              <p >20</p>
              <p>20</p>
            </div>
          </td>
          <td >
            <div className="flex">
              <p >20</p>
              <p>20</p>
            </div>
          </td>
          <td >
            <div className="flex">
              <p >20</p>
              <p>20</p>
            </div>
          </td>
          <td >
            <div className="flex">
              <p >20</p>
              <p>20</p>
            </div>
          </td>
          <td >
            <div className="flex">
              <p >20</p>
              <p>20</p>
            </div>
          </td>
          <td>
            <div className="flex">
              <p >20</p>
              <p>20</p>
            </div>
          </td>
          <td >
            <div className="flex">
              <p >20</p>
              <p>20</p>
            </div>
          </td>
          <td>
            <div className="flex">
              <p >20</p>
              <p>20</p>
            </div>
          </td>
          <td>
            <div className="flex">
              <p >20</p>
              <p>20</p>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div className="custom-grid">
      <table>
      <tr>
        <th className="w-18 start color-green">CDI</th>
        <th colspan="4" className="w-15 start color-green">ECARTS</th>
        <th className="border-none color-green w-100" colSpan="16"></th>
      </tr>
      <tr>
        <td className="start border-none">Teammate Name 1</td>
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
      </tr>
      <tr>
        <td className="start border-none">Teammate Name 2</td>
        <td colSpan="2" >2080</td>
        <td colSpan="2" className="bg-red">195</td>
        <td colspan="2" >33</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
      </tr>
      <tr>
        <td className="start border-top-none">FT Annual Leaves 25H</td>
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
      </tr>
      <tr>
        <td className="start border-none">Teammate Name 3</td>
        <td colSpan="2" >2080</td>
        <td colSpan="2" className="bg-red">195</td>
        <td colspan="2" >33</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
      </tr>
      <tr>
        <td className="start border-top-none">FT Annual Leaves 0H</td>
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
      </tr>
      <tr>
        <td className="start border-none">Teammate Name 4</td>
        <td colSpan="2" >2080</td>
        <td colSpan="2" className="bg-red">195</td>
        <td colspan="2" >33</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
      </tr>
      <tr>
        <td className="start border-top-none">FT Annual Leaves 0H</td>
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
      </tr>
      <tr>
        <td className="start border-none">Teammate Name 5</td>
        <td colSpan="2" >2080</td>
        <td colSpan="2" className="bg-red">195</td>
        <td colspan="2" >33</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
        <td colspan="2">0</td>
      </tr>
      <tr>
        <td className="start border-top-none">FT Annual Leaves 0H</td>
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
      </tr>

      <tr>
        <td className="start border-none"><span className="add-teammate">+</span> Add Teammate</td>
      </tr>

      </table>
      </div>

      <div className="custom-grid m-top">

        <table className="bg-grey">

        <tr >
          <th className="w-18 start border-none">
            <div className="inactive-members">
                <div >
                    Inactive Members 
                </div>
                <div>
                <KeyboardArrowDownOutlined />
                </div>
            </div>
          </th>
          <th colspan="4" className="w-15 start border-none"></th>
          <th className="border-none w-100" colSpan="16"></th>
        </tr>

        <tr>
          <td className="start">Teammate Name</td>
          <td colSpan="2" >2080</td>
          <td colSpan="2" className="color-white">0</td>
          <td colspan="2" >33</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
          <td colspan="2">0</td>
        </tr>

        <tr>
          <td className="start border-top-none">FT Annual Leaves 0H</td>
          <td >112</td>
          <td >16</td>
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
        </tr>

        </table>
    </div>

    </div>
  )
}

export default IndicatorGrid
