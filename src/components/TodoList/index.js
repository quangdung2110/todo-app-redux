import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { todoListSelector } from '../../redux/selector';


export default function TodoList() {

  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector)
  const inputRef = useRef()

  const handleChangeInput = (e) => {
    setInputValue(e.target.value)
  }
  const handleChangeSelect = (e) => {
    setPriority(e)
  }
  const handleAddButton = () => {
    if (inputValue === '')return
    dispatch(addTodo({
      id: uuidv4(),
      name: inputValue,
      completed: false,
      priority: priority
    }))
    setInputValue('')
    inputRef.current.focus()
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map((todo) => (
          <Todo key= {todo.id} id={todo.id} name={todo.name} priority={todo.priority} cheCked={todo.completed}/>
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input ref= {inputRef}value={inputValue} onChange={handleChangeInput}/>
          <Select defaultValue="Medium" value={priority}  onChange={handleChangeSelect}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButton}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
