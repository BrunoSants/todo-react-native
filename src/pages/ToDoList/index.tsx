import React, { useState, useCallback } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { Container, Card, CardText } from './styles';

interface ToDo {
    id: number;
    description: string;
    status: boolean;
}

const ToDoList: React.FC = () => {
    const [toDo, setToDo] = useState<ToDo[]>([
        { id: 1, description: 'Estudar JavaScript', status: false },
        { id: 2, description: 'Zuar o Fabio', status: false },
        { id: 3, description: 'Da trabalho pro Diego', status: false },
    ]);

    const handleStatus = useCallback(
        (id) => {
            const newToDo = toDo.map((todo) => {
                return todo.id === id
                    ? { ...todo, status: !todo.status }
                    : todo;
            });
            setToDo(newToDo);
        },
        [toDo],
    );

    return (
        <Container>
            {toDo.map((item: ToDo) => (
                <Card key={item.id}>
                    <CheckBox
                        disabled={false}
                        value={item.status}
                        onValueChange={() => handleStatus(item.id)}
                    />
                    <CardText>{item.description}</CardText>
                </Card>
            ))}
        </Container>
    );
};

export default ToDoList;
