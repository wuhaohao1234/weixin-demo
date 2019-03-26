import Taro, { Component} from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import './index.css'

export default class Welcome extends Component {
    render() {
        return (
            <View className='welcome'>
                <Text>
                    welcome组件
                </Text>
            </View>
        )
    }
}
