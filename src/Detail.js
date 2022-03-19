import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import './Detail.scss'

function Detail(props) {
    let [alert, alert변경] = useState(true);
    let [값저장, 값저장변경] = useState('');

    useEffect(() => {
        let 타이머 = setTimeout(()=>{alert변경(false)}, 2000)
        console.log('595959');
        return ()=>{
            clearTimeout(타이머);}
    },[]);



    let history = useHistory();
    let {id} = useParams();
    let findItem = props.shoes.find((x)=>{return x.id == id})
    let 박스 = styled.div`
      padding : 20px;
    `

    return(
        <div className="container">
            <div className="row">

                <input onChange={(e)=>{값저장변경(e.target.value)}}/>
                <p>{값저장}</p>
                {
                    alert  === true
                    ? (<div className="my-alert">
                            <p>해당제품이 몇개 남지 않았습니다</p>
                      </div>)
                    : null
                }

                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes'+ id +'.jpg'} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}</p>
                    <Info 재고={props.재고}></Info>

                    <button className="btn btn-danger" onClick={()=>{props.재고변경([9,10,11])}}>주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{
                        history.goBack();
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

function Info(props) {
    return(
        <p>재고 : {props.재고[0]}</p>
    )
}

export default Detail;