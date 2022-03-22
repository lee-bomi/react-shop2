import React from "react";
import {Table} from "react-bootstrap";
import { connect} from "react-redux";

function Cart(props) {
    return (
        <div>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>이름</th>
                    <th>가격</th>
                    <th>변경</th>
                </tr>
                </thead>
                {
                    props.state.map((a, i)=>{
                        return(
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td>
                                    <button onClick={()=>{ props.dispatch( {type : '수량증가'} )}}>+</button>
                                    <button onClick={()=>{ props.dispatch( {type : '수량감소'} )}}>-</button>
                                </td>
                            </tr>
                        )
                    })
                }

            </Table>

            {
                props.alert열렸나오 === true
                ? <div className='my-alert2'>
                        <p>지금 구매하시면 20% 추가할인!</p>
                        <button onClick={()=>{ props.dispatch( {type : '닫기'})}}>닫기</button>
                  </div>
                : null
            }

        </div>
    )
}

//redux store를 props처럼 쓰기위한 함수
function bringStore(state){
    return {
        state : state.reducer,
        alert열렸나오 : state.reducer2
    }
}

export default connect(bringStore)(Cart)
//export default Cart;