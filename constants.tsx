
import { CeramicProduct, Artist } from './types';

export const PRODUCTS: CeramicProduct[] = [
  {
    id: 'p1',
    name: '手作粗陶茶盏',
    artist: 'Kenzo大师',
    price: 45.0,
    series: '大地系列',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtgIJQHdIivWlmcFZbq3wl8c32hegx77KuQj4_V6YbbWueqUzUGUE_rXeZiH_LEmT6QxRvMCeoqGK-Yk5hRJcPfW3oNhLNknBS8iIZ6WRra2SOns4Aw9drFO4nEmUPAjxVT_zaGlz4pmpqGwS6m4DqWLAiIkCmsJ1SwB303__NvKbGoJW8xio9m1izdWcZ0oMpliYfyImo5qbRPxECEcdrSqT_aXbCfdAWjmyIrRg8PZ8FJH_ezehhTs3A1YFVZHqv7HId7Sv1S-0',
    origin: '取材自信乐地区富含铁质的陶土，这件作品体现了意外之美的精神。粗犷的颗粒质感为指尖带来如山水般的触觉体验。',
    firing: '1300°C 柴烧',
    texture: '无釉 粗陶',
    craftDetails: '在传统的穴窑中经过72小时的烧制。松木灰落在陶体上形成自然灰釉，创造出独特的“窑变”纹理。每一只茶盏都是独一无二的，承载着属于自己的火与烟的印记。'
  },
  {
    id: 'p2',
    name: '极简白瓷瓶',
    artist: '西耶娜·索恩',
    price: 120.0,
    series: '手拉坯系列',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2dGkgA5pmYJAiLmAt8S6KUl70afjivdiCBpDlB33XKxHHXun42bzRPUQT_oONDG6f4BCz2ovfUHCQp-c0Id_OEq3XiNyCN9eYE3RhQgw4JvSIoelvxQ2JwzpFpGiQIk86IsXvPEZOq1UZ8_qkq1DP5vk8XrBX24c5C0BoiMZ7Cc1ZHXBmZJfjmpzFz9GJV92n7Kn6U5eAj-xg_Lbh7ayHfm4MeXX8ebV8975rOOw3DhdENie3_nzYCciL9bojkBiCblCQP2fK9aA'
  },
  {
    id: 'p3',
    name: '赤陶花瓶 04号',
    artist: 'Elena Rossi',
    price: 120.0,
    series: '手工制作工作室作品',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYQTZwaftr-O6l228yI4P8IAcN3R5CSEkrLE4l0RngXw5koAwvxujDpxvwiZpbZ_MvhX4tAwGgrgxvvb-4FNhRLn9g5tlsQ771klk4mINn9UCg6eJMopwUd4Inp4OtKoRiMcGQLrbDLBgd9hKC3m3tUVYVha7fmfW_ePsNkrfG8mlS_khfI6KLUn2k_9sBpsnkmNFD4zBoVyffpPOS2d8IHmJH49ocgwMs2PnODwaYYA9oqXZrfGNlCgeQ0uwh6SAUjGIReVCbHEc'
  },
  {
    id: 'p4',
    name: '手工上釉碗',
    artist: '西耶娜·索恩',
    price: 85.0,
    series: '沙与海系列',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXe7G0ABUjml6cznDgCHDsrh-V4_3ylH00PJiezVp237r5uY1_-LEJKMssDwAt9EfL_n8d1BO66vxICUazcPQAmuC586okU_KDYOC7rDSWeMh6x9OFo7G_BwGTRxNC2SRah4IWNXdWWNCDDzP8tThia-IvEXW_8FBfrh9EOd0ZZ0RbjUU-pzMqC-9oY6NnROwreOLdAhnTmNmBylsXywoqkMwPzooecLqATLn-SOOtTc5XFOVMbT0gmbQoMgiuVa0dzoW0-SGalIE'
  },
  {
    id: 'p5',
    name: '纹理陶杯',
    artist: 'Elena Rossi',
    price: 34.0,
    series: '手工压制',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY5iHDwaqxumrxHLg1hrbIO3iM1TncFmGI08xkTKy4mIPFDdaG5x7ZYhmZ7-4t3xkFkZoJtRKR5S8Bvc04GxWkn9IVIXMp1uvecIqE1p_RPYqE6oq8uXU3Z8FgIs6QHKPvuHHMRvgTDQpT9WRISUvXSP7fj69PkN9rbxcbYs9QwOrK7DOrGMtE1hNq3DJdOw4cXoaDPRoID5yxr5UF_2cb5YROsMPjWx6TzLVlkfRw9_Oe08n7qePSgRCmT9_J-nuMh2bdhBOHRoA'
  }
];

export const ARTISTS: Artist[] = [
  {
    id: 'a1',
    name: '西耶娜·索恩',
    tagline: '于泥土中寻找静谧',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-srobdxXRe3O3LfdD1HQ1LIP2-_UxvU5CFCsUWboNKFeP8Hay0V6aipgPRSDFC6qK7ZUFaHTfm4kSlclW60T_Ej8xQkT1J0ECbp3_YsRZ90diwlG-dpsGosoqCsse_BVHERWOzrxlk8tH_8lG0RcJN3SOu9BSowva3ZXjzVBBgqE81_Oi21dBxwfecZXHs5ajreaNj_cGtb5s8b0zs_PXAuljFQ-dW4eAoHrMma1XKDUKQTsLdv8wcHbsyyoIQVzUzj9ZBPq8Ph4',
    bgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYOLfVPLg5agt6ILXYC2wDFfc41vet3iyBgT3Yd7o26Sa75K322WoYKgs_ipou8usDQ1XhwNkniXCIEWCDwwNWncZJTDX9uzuWVagVPQiEuK1ZpyiaXKptGsRxiEbX6fRRdM38ZPH1-QHAGRPAras5zSwnARTp9KlWhc5I8llOHzEX_fBW3d2JsTWVTeFryD0j5m0ZwpjFmoFcfSYS1bsXeimVJPW-aL-3I7lAvADOa2uTblbWwr0w0V1D_7okPzqNKnAXOrzTwt0'
  }
];
