import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../../actions';

const Todo = () => {
    const [data, setData] = useState('');
    const list = useSelector((state) => state.todoReducer.list);
    const dispatch = useDispatch()



    return (
        <div className='container'>
            <h1 className='text-center'>Todo App</h1>
            <div className='pt-5 mt-5'>
                <h3 className='text-center'>Add your Todo list here</h3>

                <div className="additems w-50 m-auto d-flex">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="✍ Add your items..." value={data} onChange={(event) => setData(event.target.value)} />

                    <button type="button" className="btn btn-primary ms-1" onClick={() => dispatch(addTodo(data), setData(""))} ><i className="fa-solid fa-plus"></i></button>

                </div>

                <div className='mt-4'>

                    {
                        list.map((elem) => {
                            return (
                                <div className='d-flex justify-content-center' key={elem.id}>
                                    <h3 className='w-25 bg-dark text-light m-2 p-1'>{elem.data}</h3>
                                    <button type="button" className="btn btn-primary m-3" onClick={() => dispatch(deleteTodo(elem.id))}><i className="fa-solid fa-delete-left"></i></button>
                                </div>
                            )

                        })
                    }

                </div>

                <div className='d-flex justify-content-center mt-4' onClick={() => dispatch(removeTodo())}>
                    <button type="button" className="btn btn-outline-success w-25">Delete All Items</button>
                </div>

            </div>
        </div>
    );
};

export default Todo;