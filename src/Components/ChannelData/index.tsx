import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                        key={n}
                        author="Mateus Vinicius" 
                        date="03/06/2020" 
                        content="Hoje é o meu aniversário!" 
                    />
                ))}
            
                <ChannelMessage 
                    author="Diego Fernandes" 
                    date="03/06/2020" 
                    content={
                        <>
                            <Mention>@Mateus Vinicius</Mention>, me carrega no Dota e no CS de novo, por favor?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;