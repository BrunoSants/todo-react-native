import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px 30px;
    flex-direction: column;

    align-items: center;
`;

export const BlockAvatar = styled.View`
    width: 150px;
    height: 150px;

    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.Image`
    width: 150px;
    height: 150px;

    border-radius: 100px;
    border-width: 0;
`;

export const FabCamButton = styled(RectButton)`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background: #009387;

    position: absolute;
    bottom: 0px;
    right: 0px;

    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 36px;
    background: #098778;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    color: #ffffff;
`;

export const AvatarText = styled.Text`
    margin: 15px 0px;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
`;

export const Card = styled.View`
    flex-direction: row;
    height: 60px;
    width: 100%;

    align-items: center;
    padding: 10px;

    border-bottom-width: 1px;
    border-color: rgba(158, 150, 150, 0.5);
`;

export const CardText = styled.Text`
    font-size: 18px;
    color: #000000;
    margin-left: 30px;
`;
