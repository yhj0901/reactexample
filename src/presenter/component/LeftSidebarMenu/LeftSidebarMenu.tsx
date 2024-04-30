'use client';
import MenuItem from '@/presenter/component/LeftSidebarMenu/menuItem/MenuItem';

export interface MenuData {
  title: string;
  permisson: string;
  level: number;
  link?: string;
  subMenu: MenuData[];
  isOpen: boolean;
}

const LeftSidebarMenu = () => {
  const menuData: MenuData[] = [
    {
      title: '만화',
      permisson: 'write',
      subMenu: [
        {
          title: '신규등록',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '만화',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '작가',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '키워드',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '캐릭터 정보',
          permisson: 'write',
          subMenu: [
            {
              title: '캐릭터 태그',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '캐릭터 리스트',
              permisson: 'write',
              subMenu: [],
            },
          ],
        },
        {
          title: '인기 검색어 (화이트리스트)',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '테마관',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '기획전',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '프로모션 정보 배너',
          permisson: 'write',
          subMenu: [],
        },
      ],
    },
    {
      title: '카테고리',
      permisson: 'write',
      subMenu: [
        {
          title: '메인',
          permisson: 'write',
          subMenu: [
            {
              title: '월',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '화',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '수',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '목',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '금',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '토',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '일',
              permisson: 'write',
              subMenu: [],
            },
          ],
        },
        {
          title: '완결',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '추천',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '신작',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '장르',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '성인',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '신작 시리즈',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: 'ArtWorks',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: 'Promotion',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '독점무료',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '망가',
          permisson: 'write',
          subMenu: [],
        },
      ],
    },
    {
      title: '배너',
      permisson: 'write',
      subMenu: [
        {
          title: '메인',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '이벤트',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '플로팅',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '유저 배너',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '랜덤 유저 배너',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '액션 레이어 관리',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '메인 중앙',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '로고 관리',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '결제',
          permisson: 'write',
          subMenu: [],
        },
      ],
    },
    {
      title: '프로모션',
      permisson: 'write',
      subMenu: [
        {
          title: '선물함',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '등급 설정',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '친구 초대',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '굿즈 리스트',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '전체 소장',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '전체 소장 (개별설정)',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '이벤트 목록',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '회차 유도',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: 'Dailyreward (룰렛)',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '이상형 월드컵',
          permisson: 'write',
          subMenu: [],
        },
      ],
    },
    {
      title: '결제 상품',
      permisson: 'write',
      subMenu: [
        {
          title: '결제 상품 목록',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '결제 수단 관리',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '국가별 통화 선택',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '상품 그룹 관리',
          permisson: 'write',
          subMenu: [],
        },
      ],
    },
    {
      title: '유저',
      permisson: 'write',
      subMenu: [
        {
          title: '유저 리스트',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '유저 차단 리스트',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '유저 Visitor ID 차단 리스트',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '공지사항',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: 'FAQ',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '신고/문의',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '댓글 관리',
          permisson: 'write',
          subMenu: [
            {
              title: '댓글 필터',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '댓글 검수',
              permisson: 'write',
              subMenu: [],
            },
          ],
        },
      ],
    },
    {
      title: '앱',
      permisson: 'write',
      subMenu: [
        {
          title: '앱 푸쉬',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '앱 업로드',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '앱 버전 관리',
          permisson: 'write',
          subMenu: [],
        },
      ],
    },
    {
      title: '통계',
      permisson: 'write',
      subMenu: [
        {
          title: '코인',
          permisson: 'write',
          subMenu: [
            {
              title: '누적 코인 내역',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '날짜별 코인 내역',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '코인 / 시간별',
              permisson: 'write',
              subMenu: [],
            },
          ],
        },
        {
          title: '매출',
          permisson: 'write',
          subMenu: [
            {
              title: '전체 / 결제',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '자동충전 결제내역',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '시간 / 결제',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '일별 / 결제',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '일별 / 첫결제',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '국가별 / 화폐별',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '할인쿠폰 통계',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '자동충전 / 멤버십',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '결제통계 갱신',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '일별 구매 상품',
              permisson: 'write',
              subMenu: [],
            },
          ],
        },
        {
          title: '작품',
          permisson: 'write',
          subMenu: [
            {
              title: '만화 - 일자별',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '만화 - 시간별',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '회차',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '최신회차 판매',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '전체 구매 - 일자별',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '전체 구매 - 작품별',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '무료회차 소장',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '뷰어 유료회차 소장',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '자동 구독',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '기획전',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '기다빵(일별)',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '추천무료(일별)',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '신작 오픈 통계',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '일별 / 작품',
              permisson: 'write',
              subMenu: [],
            },
          ],
        },
        {
          title: '회원',
          permisson: 'write',
          subMenu: [
            {
              title: '회원가입 / 로그인',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '가입통계 / 국가별',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '가입통계 / 시간별',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '로그인통계 / 국가별',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '로그인통계 / 시간별',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '사전인증',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '자동인증',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '그룹',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '회원 등급 통계',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '차단 통계',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '방문자 통계',
              permisson: 'write',
              subMenu: [],
            },
          ],
        },
        {
          title: '프로모션',
          permisson: 'write',
          subMenu: [
            {
              title: '선물함',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '시즌패스 통계',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '쿠폰 통계',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '마케팅 쿠폰 통계',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '유입 데이터 통계',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: 'Dailyreward (룰렛)',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '굿즈 코인 통계',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '친구초대 통계(일별)',
              permisson: 'write',
              subMenu: [],
            },
          ],
        },
        {
          title: '파트너',
          permisson: 'write',
          subMenu: [
            {
              title: '파트너 코드',
              permisson: 'write',
              subMenu: [],
            },
            {
              title: '파트너 통계',
              permisson: 'write',
              subMenu: [],
            },
          ],
        },
        {
          title: '앱',
          permisson: 'write',
          subMenu: [
            {
              title: '앱 다운로드',
              permisson: 'write',
              subMenu: [],
            },
          ],
        },
      ],
    },
    {
      title: '관리자 계정 컨트롤',
      permisson: 'write',
      subMenu: [
        {
          title: '관리자 계정 리스트',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '가입 신청 리스트',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '비활성 계정 리스트',
          permisson: 'write',
          subMenu: [],
        },
      ],
    },
    {
      title: '기타',
      permisson: 'write',
      subMenu: [
        {
          title: '환경설정',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '수정내역',
          permisson: 'write',
          subMenu: [],
        },
        {
          title: '글로벌 설정',
          permisson: 'write',
          subMenu: [],
        },
      ],
    },
  ];

  return (
    <nav className="text-base font-semibold h-full overflow-y-auto">
      {menuData.map((item) => (
        <MenuItem item={item} />
      ))}
    </nav>
  );
};

export default LeftSidebarMenu;
