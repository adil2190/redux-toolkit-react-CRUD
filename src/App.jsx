import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Card, Col, Row, Space, Spin, Button, Form, Input, Switch } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { db } from "./firebaseConfigs";

function App() {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      console.log(values);
      await db.collection("Barcodes").add(values);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Row justify="center" align="middle">
      <Col span={16}>
        <Card
          size="small"
          title="Add Products"
          style={{ width: "100%", marginTop: 100 }}
        >
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            autoComplete="off"
          >
            <Form.Item
              name={"title"}
              rules={[
                {
                  required: true,
                  message: "Missing Title",
                },
              ]}
            >
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item
              name={"barcode"}
              rules={[
                {
                  required: true,
                  message: "Missing Barcode",
                },
              ]}
            >
              <Input placeholder="Barcode" />
            </Form.Item>
            <Form.Item name={"isHalal"} initialValue={false}>
              <Switch />
            </Form.Item>
            <Form.List name="ingredients">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: "flex",
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "ingredient"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing ingredient",
                          },
                        ]}
                      >
                        <Input placeholder="Ingredient" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "type"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing type",
                          },
                        ]}
                      >
                        <Input placeholder="Type" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button
                loading={loading}
                disabled={loading}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Button
          type="primary"
          onClick={async () => {
            const ref = await db.collection("Barcodes").get();
            console.log(ref.docs.map((item) => item.data()));
          }}
        >
          Check
        </Button>
      </Col>
    </Row>
  );
}

export default App;
