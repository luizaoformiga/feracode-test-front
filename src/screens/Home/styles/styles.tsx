import styled from 'styled-components/native';
import colors from './colors';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background_wrapper};
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  padding: 0 16px;
  align-items: center;
`;

export const SearchHeader = styled.Text`
  text-align: center;
  align-items: center;
`;

export const SearchInput = styled.Text`
    //background-color: '#000';
    //margin: 20px;
    //border-radius: 1.0;
    //padding: 10px;
    //color: '#fff';
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: ${colors.color_balance_title};
  font-size: 20px;
  text-align: center;
  padding: 8px;
`;

export const Balance = styled.Text`
  color: ${colors.color_balance};
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
