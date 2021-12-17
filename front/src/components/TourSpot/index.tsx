import React from 'react';
import { DetailItemProps } from '../../modules/detail';
import { IntroWrapper, Li } from './style';

const TourSpot = ({ item }: DetailItemProps) => {
  const { addr1, homepage } = item;
  const {
    accomcount,
    chkbabycarriage,
    chkcreditcard,
    chkpet,
    expagerange,
    expguide,
    infocenter,
    opendate,
    parking,
    restdate,
    useseason,
    usetime,
  } = item.intro;
  return (
    <IntroWrapper>
      <ul>
        {addr1 ? (
          <Li>
            <b>주소</b> <p>{addr1}</p>
          </Li>
        ) : null}
        {homepage ? (
          <Li>
            <b>홈페이지</b>{' '}
            <p
              dangerouslySetInnerHTML={{
                __html: homepage,
              }}
            />
          </Li>
        ) : null}
        {/* {!accomcount ? null : (
          <Li>
            <strong>수용인원</strong>: {accomcount}
          </Li>
        )} */}
        {/* {!chkbabycarriage ? null : <Li>유모차대여 {chkbabycarriage}</Li>}
        {!chkcreditcard ? null : <Li>신용카드가능여부 {chkcreditcard}</Li>}
        {!chkpet ? null : <Li>애완동물 동반 {chkpet}</Li>}
        {!expagerange ? null : <Li>체험가능 연령{expagerange}</Li>}
        {!expguide ? null : <Li>체험안내 {expguide}</Li>}
        {!infocenter ? null : <Li>문의 {infocenter}</Li>}
        {!opendate ? null : <Li>개장일 {opendate}</Li>}
        {!parking ? null : <Li>주차시설 {parking}</Li>}
        {!restdate ? null : <Li>휴무일 {restdate}</Li>}
        {!useseason ? null : <Li>이용시기 {useseason}</Li>}
        {!usetime ? null : <Li>이용시간 {usetime}</Li>} */}
      </ul>
    </IntroWrapper>
  );
};

export default TourSpot;