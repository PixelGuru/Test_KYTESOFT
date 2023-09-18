/* eslint-disable jsx-a11y/anchor-is-valid */
import { DownOutlined } from "@ant-design/icons";
import { Form, Select, Space } from "antd";
import { useState } from "react";
import {
  ButtonAdvancedSearch,
  StyledDataPicker,
  StyledFormItem,
  StyledInput,
  StyledSelect,
  StyledSpace,
} from "./styled";
const { Option } = Select;

const Search = () => {
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);

  const getFields = (
    <>
      <StyledFormItem>
        <StyledInput placeholder="Destination, city" />
      </StyledFormItem>
      <StyledFormItem>
        <StyledDataPicker picker="month" placeholder="Any Month" />
      </StyledFormItem>
      <StyledFormItem>
        <StyledSelect defaultValue={1}>
          <Option value={1}>Sort By Date</Option>
          <Option value="">Price Low to High</Option>
          <Option value="">Price High to Low</Option>
          <Option value="">Sort By Name</Option>
          <Option value="">Sort By Popularity</Option>
          <Option value="">Sort By Review Score</Option>
        </StyledSelect>
      </StyledFormItem>
    </>
  );

  const advancedFields = (
    <>
      <StyledFormItem>
        <StyledSelect defaultValue={1}>
          <Option value={1}>All Categories</Option>
          <Option value="">Mountain</Option>
          <Option value="">Rural</Option>
          <Option value="">Sort By Name</Option>
          <Option value="">Snow & Ice</Option>
          <Option value="">Wildlife</Option>
        </StyledSelect>
      </StyledFormItem>
      <StyledFormItem>
        <StyledSelect defaultValue={1}>
          <Option value={1}>Any Destinations</Option>
          <Option value="">Tokyo</Option>
          <Option value="">Seoul</Option>
          <Option value="">Paris</Option>
          <Option value="">London</Option>
          <Option value="">Venice</Option>
          <Option value="">Miami</Option>
          <Option value="">Rome</Option>
          <Option value="">Prague</Option>
          <Option value="">California</Option>
          <Option value="">Kyoto</Option>
          <Option value="">Hong Kong</Option>
          <Option value="">Santorini</Option>
        </StyledSelect>
      </StyledFormItem>
      <StyledFormItem>
        <StyledInput
          suffix={<span style={{ color: "rgba(0,0,0,.45)" }}> $</span>}
        />
      </StyledFormItem>
    </>
  );

  return (
    <Form form={form}>
      {expand ? (
        <div>
          <div>
            <StyledSpace size={20}>{getFields}</StyledSpace>
          </div>
          <div>
            <StyledSpace size={20}>{advancedFields}</StyledSpace>
          </div>
        </div>
      ) : (
        <StyledSpace size={20}>{getFields}</StyledSpace>
      )}

      <div style={{ textAlign: "left" }}>
        <Space size="small">
          <ButtonAdvancedSearch
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> Advanced Search
          </ButtonAdvancedSearch>
        </Space>
      </div>
    </Form>
  );
};
export default Search;
