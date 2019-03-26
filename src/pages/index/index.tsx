import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button} from '@tarojs/components'
import Welcome from './welcome'
import './index.css'
interface Istate {
  [index: string]: any
}

type State = Readonly<Istate>
export default class Index extends Component {
  readonly state: State = {
    clicksCount: 0
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '初始页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  /**
   * activateLasers
   */
  public activateLasers() {
    this.setState((preState: Istate) => {
      clicksCount: preState.clicksCount ++
    })
  }
  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View>
          <Button className='red' onClick={this.activateLasers} >点击我</Button>
        </View>
        <Text>
          {this.state.clicksCount}
        </Text>
        <Welcome/>
      </View>
    )
  }
}
