import React, {useContext, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import styled from "styled-components";
import './Detail.scss'
import { Nav } from "react-bootstrap";
import {CSSTransition} from "react-transition-group";
import {connect, useSelector} from "react-redux";

function Detail(props) {
    let [alert, alert변경] = useState(true);
    let [값저장, 값저장변경] = useState('');
    //let 재고 = useContext(재고context);
    let [탭, 탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);

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

    let state = useSelector((state) => state.reducer);

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

                    <button className="btn btn-danger" onClick={()=>{
                        props.재고변경([9,10,11])
                        props.dispatch({type: '항목추가', payload : {id : findItem.id, name:findItem.title, quan : 4}})
                        history.push('/cart');
                    }}>주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{
                        history.goBack();
                    }}>뒤로가기</button>
                </div>
            </div>

            <Nav className="mt-5" variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); 탭변경(0)}}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); 탭변경(1)}}>Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={()=>{스위치변경(false); 탭변경(2)}}>Option 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={스위치} classNames="wow" timeout={500}>
                <TabContent 탭={탭} 스위치변경={스위치변경}></TabContent>
            </CSSTransition>
        </div>
    )
}

function Info(props) {
    return(
        <p>재고 : {props.재고[0]}</p>
    )
}

function TabContent(props) {

    useEffect(()=>{
        props.스위치변경(true);
    });

    if(props.탭 === 0){
        return <div>0번째내용입니다</div>
    } else if( props.탭 === 1 ){
        return <div>1번째내용입니다</div>
    } else return <div>2번째내용입니다</div>
}
function bringStore(state){
    return {
        state : state.reducer,
        alert열렸나오 : state.reducer2
    }
}

export default connect(bringStore)(Detail)
//export default Detail;