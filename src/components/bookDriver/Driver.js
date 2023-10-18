import React, { useState } from "react";
import { Link } from "react-router-dom";
import SaveSharpIcon from "@mui/icons-material/SaveSharp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import "./Driver.css";
import axios from "../../axios";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Driver = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [depart, setDepart] = useState("");
  const [objective, setObjective] = useState("");
  const [place, setPlace] = useState("");
  const [enddate, setEnddate] = useState("");

  function submit() {
    const post = {
      startDate: date,
      endDate: enddate,
      surname: name,
      department: depart,
      objective: objective,
      type: type,
      startTime: startTime,
      endTime: endTime,
      place: place,
    };
    if (
      !(
        date &&
        type &&
        depart &&
        objective &&
        name &&
        startTime &&
        endTime &&
        enddate
      )
    ) {
      console.log("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else {
      axios
        .post("/schedule", post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      setDate("");
      setDepart("");
      setName("");
      setObjective("");
      setPlace("");
      setStartTime("");
      setType("");
      setEndTime("");
      console.log(post);
    }
  }
  return (
    <div className="Dver__page">
      <div className="Box">
        <h1 className="H1">กรุณากรอกข้อมูลให้ครบถ้วน</h1>
        <div className="input__margin">
          <p className="P">เลือกประเภทการจอง</p>

          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Age"
            fullWidth
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="รถกระบะ">รถกระบะ</MenuItem>
            <MenuItem value="รถตู้1">รถตู้1</MenuItem>
            <MenuItem value="รถตู้2">รถตู้2</MenuItem>
            <MenuItem value="รถบรรทุกหกล้อ">รถบรรทุกหกล้อ</MenuItem>
          </Select>
        </div>
        <p className="P">วันที่เริ่มต้น-วันที่สิ่นสุด</p>
        <div className="date__box">
          <div className="input__margin">
            <TextField
              color="primary"
              fullWidth
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="input__margin">
            <TextField
              color="primary"
              fullWidth
              type="date"
              value={enddate}
              onChange={(e) => setEnddate(e.target.value)}
            />
          </div>
        </div>
        <p className="P">เวลาเริ่มต้น-เวลาสิ่นสุด</p>
        <div className="time__box">
          <div className="input__margin">
            <TextField
              color="primary"
              fullWidth
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="input__margin">
            <TextField
              color="primary"
              fullWidth
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>

        <div className="Text__ip">
          <div className="input__margin">
            <TextField
              label="ชื่อ-นามสกุล"
              color="primary"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input__margin">
            <TextField
              label="แผนก"
              color="primary"
              fullWidth
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
              type="number"
            />
          </div>
          <div className="input__margin">
            <TextField
              label="จุดประสงค์"
              multiline
              fullWidth
              rows={1}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
            />
          </div>
          <div className="input__margin">
            <TextField
              label="จุดหมายปลายทาง"
              multiline
              fullWidth
              rows={1}
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
        </div>

        <div className="confirm">
          <Button
            variant="contained"
            startIcon={<SaveSharpIcon />}
            onClick={submit}
          >
            ตกลง
          </Button>

          <div className="back__01">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                startIcon={<CloseTwoToneIcon />}
                color="warning"
              >
                ยกเลิก
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Link to="/">
        <div className="Btn__back">
          <Button variant="contained" startIcon={<ArrowBackIosIcon />}>
            ย้อนกลับ
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Driver;
