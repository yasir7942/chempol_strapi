import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeoInfomation extends Schema.Component {
  collectionName: 'components_seo_seo_infomations';
  info: {
    displayName: 'seoInfomation';
    icon: 'search';
    description: '';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDesctiption: Attribute.Text;
    schema: Attribute.Component<'seo.schema-list', true>;
    canonicalLinks: Attribute.String;
    preventIndexing: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SeoSchemaList extends Schema.Component {
  collectionName: 'components_seo_schema_lists';
  info: {
    displayName: 'SchemaList';
    icon: 'server';
  };
  attributes: {
    name: Attribute.String;
    code: Attribute.Text;
  };
}

export interface SeoProductSchema extends Schema.Component {
  collectionName: 'components_seo_product_schemas';
  info: {
    displayName: 'productSchema';
    icon: 'doctor';
    description: '';
  };
  attributes: {
    sku: Attribute.String;
    gtin8: Attribute.String;
    mpn: Attribute.String;
    reviews: Attribute.Component<'seo.product-review', true>;
    offerCount: Attribute.Integer;
  };
}

export interface SeoProductReview extends Schema.Component {
  collectionName: 'components_seo_product_reviews';
  info: {
    displayName: 'ProductReview';
    icon: 'star';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    reviewBody: Attribute.Text;
    bestRating: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 5;
        },
        number
      >;
    datePublished: Attribute.Date;
    author: Attribute.String;
  };
}

export interface LayoutTsdlist extends Schema.Component {
  collectionName: 'components_layout_tsdlists';
  info: {
    displayName: 'tsdlist';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    listText: Attribute.Text;
  };
}

export interface LayoutTopBanner extends Schema.Component {
  collectionName: 'components_layout_top_banners';
  info: {
    displayName: 'TopBanner';
    icon: 'play';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    webBanner: Attribute.Media<'images'>;
    mobileBanner: Attribute.Media<'images'>;
  };
}

export interface LayoutTextImage extends Schema.Component {
  collectionName: 'components_layout_text_images';
  info: {
    displayName: 'TextImage';
    icon: 'picture';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'videos'>;
  };
}

export interface LayoutHeadingText extends Schema.Component {
  collectionName: 'components_layout_heading_texts';
  info: {
    displayName: 'HeadingText';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface LayoutHeadingTextIcon extends Schema.Component {
  collectionName: 'components_layout_heading_text_icons';
  info: {
    displayName: 'HeadingTextIcon';
    icon: 'check';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    icon: Attribute.String;
  };
}

export interface LayoutFaq extends Schema.Component {
  collectionName: 'components_layout_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'layer';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface LayoutContactList extends Schema.Component {
  collectionName: 'components_layout_contact_lists';
  info: {
    displayName: 'ContactList';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    company: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    address: Attribute.String;
    mapUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo-infomation': SeoSeoInfomation;
      'seo.schema-list': SeoSchemaList;
      'seo.product-schema': SeoProductSchema;
      'seo.product-review': SeoProductReview;
      'layout.tsdlist': LayoutTsdlist;
      'layout.top-banner': LayoutTopBanner;
      'layout.text-image': LayoutTextImage;
      'layout.heading-text': LayoutHeadingText;
      'layout.heading-text-icon': LayoutHeadingTextIcon;
      'layout.faq': LayoutFaq;
      'layout.contact-list': LayoutContactList;
    }
  }
}
