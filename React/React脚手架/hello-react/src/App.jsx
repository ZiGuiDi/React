import React, { Component } from 'react'
import { Button, Space, ConfigProvider } from 'antd';

export default class App extends Component {
    render() {
        return (
            <ConfigProvider
                theme={{
                    token: {
                        // Seed Token，影响范围大
                        colorPrimary: '#4F9FC7',
                        borderRadius: 2,

                        // 派生变量，影响范围小
                        colorBgContainer: '#FF0000',
                    },
                }}
            >
                <Space>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                </Space>
            </ConfigProvider>
        )
    }
}
