import { ListDataItem } from '@/types/listDataTypes'
import { FcLinux } from 'react-icons/fc'
import { TbBrandCpp, TbBrandTypescript, TbBrandNextjs } from 'react-icons/tb'
import { FaAws } from 'react-icons/fa'
import { RiJavascriptLine } from 'react-icons/ri'
import { SiGnubash } from 'react-icons/si'

export const CATEGORIES: ListDataItem[] = [
  {
    id: 1,
    icon: <TbBrandCpp color="#fff" size={42} />,
    value: 'c++',
  },
  {
    id: 2,
    icon: <FaAws color="#fff" size={42} />,
    value: 'aws',
  },
  {
    id: 3,
    icon: <TbBrandTypescript color="#fff" size={42} />,
    value: 'typescript',
  },
  {
    id: 4,
    icon: <FcLinux color="#fff" size={42} />,
    value: 'linux',
  },
  {
    id: 5,
    icon: <SiGnubash color="#fff" size={42} />,
    value: 'bash',
  },
  {
    id: 6,
    icon: <RiJavascriptLine color="#fff" size={42} />,
    value: 'javascript',
  },
  {
    id: 7,
    icon: <TbBrandNextjs color="#fff" size={42} />,
    value: 'nextjs',
  },
]
