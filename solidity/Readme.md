# Solidity 배포 주소 및 명세

해야 하는 거 : 출력 시 데이터들 순서 바뀜, 타입이랑 행성 이름 맞추기, 민팅할 때 가격 빼기

❤ 거래 시에 암호화폐는 ether를 사용하지만, solidity에서는 소수점 지원 잘 안해주니까 wei 단위로 입력해주세요.

🧡 10^18 wei = 1 ether

💛 민팅할 때, 판매할 때, 구매할 때 등 모든 경우에 wei 단위로 써주시면 됩니당

## RoseToken.sol : 장미꽃 nft와 관련된 기능을 구현한 파일입니다.

---

### <기능 명세>

| 구현 여부 |  | 함수 이름 | 입력 | 출력 형태 | 출력 내용 | 설명 |
| --- | --- | --- | --- | --- | --- | --- |
| V | send | mintRoseToken | - | - | - | 새로운 장미꽃 nft를 민팅합니다. |
| V | call | getRoseTokens | address _roseTokenOwner // 사용자 지갑 주소 | RoseTokenData[] | uint256 roseTokenId; // 장미꽃 아이디 uint256 rosePrice; // 장미꽃 가격(0) <br /> uint256 roseColor; // 장미꽃 색깔  <br /> uint256 roseType; // 장미꽃 종류(잡초, 해바라기 등)  <br /> uint256 createdAt; // 씨앗 생성 시점  <br /> address userAddress; // 해당 행성을 소유한 사용자 지갑 주소 <br /> bool onSale; // 판매 여부 | 사용자가 보유한 장미꽃 nft 리스트를 반환합니다. |
| V | call | b612AddressMap | uint256 _ |  |  |  |
| V | call | getOnSaleRose | - | RoseTokenData[] | uint256 roseTokenId; // 장미꽃 아이디 uint256 rosePrice; // 장미꽃 가격  <br /> uint256 roseColor; // 장미꽃 색깔  <br /> uint256 roseType; // 장미꽃 종류(잡초, 해바라기 등)  <br /> uint256 createdAt; // 씨앗 구매 시점  <br /> address userAddress; // 해당 행성을 소유한 사용자 지갑 주소  <br /> bool onSale; // 판매 여부 | 판매중인 전체 장미꽃 nft 리스트를 반환합니다. |
| V | call | getRoseSalesLog | uint256 _roseTokenId // 장미꽃 nft의 토큰 아이디 | RoseSalesLog[] | uint256 rosePrice; // 판매된 가격  <br /> address roseSeller; // 판매자  <br /> address roseBuyer; // 구매자  <br /> uint soldAt; // 판매 시점  <br /> uint next; // 다음 노드 주소 저장 | 특정 장미꽃 nft의 판매, 구매 기록 리스트를 반환합니다. |
| V | send | setForSaleRoseToken | uint256 _roseTokenId, // 장미꽃 nft의 토큰 아이디  <br /> uint256 _price // 팔고자 하는 가격 | - | - | 특정 사용자가 특정 장미꽃 nft를 판매하기 위해 marketplace에 올립니다. |
| V | send | discardForSaleRoseToken | uint256 _roseTokenId, // 장미꽃 nft의 토큰 아이디 | - | - | 특정 사용자가 특정 장미꽃 nft를 판매를 취소합니다. |
| V | send | purchaseRoseToken | uint256 _roseTokenId // 장미꽃 nft의 토큰 아이디 | - | - | 특정 사용자가 특정 장미꽃 nft를 구매합니다. |
| V | send | setApprovalForAll | address operator, // 배포 주소  <br /> boolean approved // 승인 여부 | - | - | 특정 사용자가 해당 배포 주소에서 구매/판매 할 수 있도록 승인여부를 지정합니다. |

## PlanetToken.sol : 행성 nft와 관련된 기능을 구현한 파일입니다.

---

### <기능 명세>

| 구현 여부 |  | 함수 이름 | 입력 | 출력 형태 | 출력 내용 | 설명 |
| --- | --- | --- | --- | --- | --- | --- |
| V | send | mintPlanetToken | - | - | - | 새로운 행성 nft를 민팅합니다.  <br /> 행성 아이디 : auto increment  <br /> 행성 가격 : 0  <br /> 행성 색깔 : 랜덤 HEX  <br /> 행성 유형 : 10가지 type 중 랜덤 한 개  <br /> 행성 이름 : 유형에 맞추어 램덤으로 설정  <br /> 구매 시점 : 민팅 시점 |
| V | call | getPlanetTokens | address _planetTokenOwner // 사용자 지갑 주소 | PlanetTokenData[] | uint256 planetTokenId; // 행성 아이디  <br /> uint256 planetPrice; // 행성 가격  <br /> uint256 planetType; // 행성 유형(모양)  <br /> string planetName; // 행성 이름  <br /> uint createdAt; // 생성 시점  <br /> address userAddress; // 해당 행성을 소유한 사용자 지갑 주소  <br /> bool onSale; // 판매 여부 | 사용자가 보유한 행성 nft 리스트를 반환합니다. |
| V | call | b612AddressMap | uint256 _planetTokenId // 행성 nft의 토큰 아이디 | PlanetTokenData | uint256 planetTokenId; // 행성 아이디uint256  <br /> uint256 planetPrice; // 행성 가격   <br /> string planetColor; // 행성 색깔   <br /> uint256 planetType; // 행성 유형(모양)  <br /> string planetName; // 행성 이름uint createdAt; // 구매 시점  <br /> address userAddress; // 해당 행성을 소유한 사용자 지갑 주소  <br />bool onSale; // 판매 여부 | 특정 행성에 관한 정보를 반환합니다. |
| V | call | getOnSalePlanet | - | PlanetTokenData[] | uint256 planetTokenId; // 행성 아이디uint256  <br /> uint256 planetPrice; // 행성 가격  <br /> string planetColor; // 행성 색깔 <br /> uint256 planetType; // 행성 유형(모양) <br /> string planetName; // 행성 이름uint createdAt; // 구매 시점  <br /> address userAddress; // 해당 행성을 소유한 사용자 지갑 주소  <br /> bool onSale; // 판매 여부 | 판매중인 전체 행성 nft 리스트를 반환합니다. |
| V | call | getPlanetSalesLog | uint256 _planetTokenId // 행성 nft의 토큰 아이디 | PlanetSalesLog[] | uint256 planetPrice; // 판매된 가격  <br /> address planetSeller; // 판매자  <br /> address planetBuyer; // 구매자  <br /> uint soldAt; // 판매 시점  <br /> uint next; // 다음 노드 주소 저장 | 특정 행성 nft의 판매, 구매 기록 리스트를 반환합니다. |
| V | send | setForSalePlanetToken | uint256 _planetTokenId, // 행성 nft의 토큰 아이디 <br /> uint256 _price // 팔고자 하는 가격 | - | - | 특정 사용자가 특정 행성 nft를 판매하기 위해 marketplace에 올립니다. |
| V | send | discardForSalePlanetToken | uint256 _planetTokenId, // 행성 nft의 토큰 아이디 | - | - | 특정 사용자가 특정 행성 nft를 판매를 취소합니다. |
| V | send | purchasePlanetToken | uint256 _planetTokenId // 행성 nft의 토큰 아이디 | - | - | 특정 사용자가 특정 행성 nft를 구매합니다. |
| V | send | setApprovalForAll | address operator, // 배포 주소  <br /> boolean approved // 승인 여부 | - | - | 특정 사용자가 해당 배포 주소에서 구매/판매 할 수 있도록 승인여부를 지정합니다. |
| V | call | isApprovedForAll | owner // 사용자 지갑 주소 <br /> operator // contract 주소 | bool | contract에 대한 사용자의 승인 여부 | contract에 대한 사용자의 승인 여부를 출력합니다. |
| V | call | totalSupply | - | - | nft 개수(uint) | 행성 nft의 총 개수를 리턴합니다. |
| V | call | planetPrices | uint256 _planetTokenId // 행성 nft의 토큰 아이디 | uint256 | 가격 | 행성 nft의 가격을 리턴합니다. |

## Auction.sol : 경매와 관련된 기능을 구현한 파일입니다.

---

### <기능 명세>

컨트랙트 Deploy 할 때 넣어야 하는 매개변수 

- uint biddingTime 경매 진행 총 시간(초 단위) `ex : 3600`
- address beneficiaryAddress 물건을 내 놓은 사람의 지갑 주소(수혜자) `ex : 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db`
- uint lowPrice 수혜자가 설정한 최저가격(만약 설정하지 않았으면 임의로 0 넣기, **ether 기준**) `ex : 10000000000000000`
- uint highPrice 수혜자가 설정한 최고가격(만약 설정하지 않았으면 임의로 큰 수 넣기, ether 기준) `ex : 1000000000000000000`

| 구현 여부 | 함수 이름 | 입력 | 출력 형태 | 출력 내용 | 설명 |
| --- | --- | --- | --- | --- | --- |
| V | bid | value에 입찰 금액 입력 | - | - | 입찰자가 입찰을 합니다. |
| V | auctionEnd | - | - | - | 시간이 종료된 후에 해당 기능을 실행시켜 가장 높은 입찰자의 돈을 수혜자에게 보냅니다.  |
| V | withdraw | - | - | - | 해당 경매에 입찰했으나 낙찰되지 못한 입찰자에게 돈을 돌려줍니다.  |
| V | withdrawAll | - | - | - | 해당 경매에 입찰했으나 낙찰되지 못한 모든 입찰자에게 돈을 돌려줍니다. |
| V | getCurrentBid | address bidderAddress // 입찰자 지갑 주소 | uint | - | 특정 입찰자가 지금까지 입찰한 가장 높은 가격을 리턴합니다.  |
| V | getHighestBid | - | uint | - | 현재까지 가장 높은 입찰가격을 리턴합니다. |
| V | getHighestBidder | - | address | - | 현재까지 가장 높은 입찰을 한 입찰자의 지갑 주소를 리턴합니다. |
