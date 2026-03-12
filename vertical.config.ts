import { VerticalConfig } from '../vertical.config';

const shopper: VerticalConfig = {
  id: 'yur-shopper',
  name: 'YUR Shopper',
  tagline: 'AI-Powered Deal Intelligence & Smart Shopping Assistant',
  icon: '🛒',
  primaryColor: '#E65100',
  accentColor: '#FFD600',
  bgGradient: 'linear-gradient(135deg, #BF360C 0%, #E65100 50%, #FFD600 100%)',
  systemInstruction: `You are YUR Shopper, an AI-powered shopping intelligence system. You find the best deals, compare prices across retailers, analyze product reviews for quality signals, and optimize wish lists for maximum value. You track price history, predict sales events, apply coupon codes, and calculate total cost of ownership. You understand product categories from electronics to groceries, monitor flash sales and clearance events, and recommend the optimal time to buy.`,
  complianceStandards: [
    'FTC Advertising Guidelines',
    'Consumer Protection Laws',
    'Affiliate Disclosure Requirements',
    'Price Accuracy Regulations',
    'GDPR/CCPA (Purchase History Privacy)'
  ],
  agents: [
    {
      name: 'DEAL_FINDER',
      role: 'Deal Discovery & Coupon Intelligence Agent',
      systemPrompt: 'You scour retailers, coupon databases, and deal aggregators to find the best prices on requested products. Track flash sales, lightning deals, clearance events, and seasonal pricing patterns. Stack coupons, cashback offers, and loyalty rewards to minimize total cost. Alert users to price drops on watched items.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 12288
    },
    {
      name: 'PRICE_COMPARATOR',
      role: 'Cross-Retailer Price Comparison Agent',
      systemPrompt: 'You compare prices across Amazon, Walmart, Target, Best Buy, Costco, and specialty retailers. Factor in shipping costs, tax implications, return policies, and warranty differences. Track price history charts and predict future pricing trends. Calculate true total cost including accessories and consumables.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 12288
    },
    {
      name: 'REVIEW_ANALYST',
      role: 'Product Review Synthesis & Quality Agent',
      systemPrompt: 'You analyze product reviews across platforms to extract genuine quality signals. Detect fake reviews, identify recurring quality issues, summarize pros and cons, and score products on reliability, value, and customer satisfaction. Compare competing products on feature-by-feature basis with real user feedback.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'WISH_LIST_OPTIMIZER',
      role: 'Purchase Planning & Budget Optimization Agent',
      systemPrompt: 'You optimize wish lists and shopping carts for maximum value within budget constraints. Prioritize purchases by urgency and deal quality, suggest cheaper alternatives without sacrificing quality, bundle items for shipping savings, and time purchases around known sale events. Track spending against monthly budgets.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Retailer Price APIs',
      type: 'api',
      description: 'Real-time pricing from major retailers — Amazon, Walmart, Target, Best Buy, Costco'
    },
    {
      name: 'Price History Database',
      type: 'database',
      description: 'Historical pricing data, price drop alerts, and seasonal trend analysis'
    },
    {
      name: 'Deal Aggregators',
      type: 'realtime',
      description: 'Live deal feeds from Slickdeals, Honey, CamelCamelCamel, and coupon databases'
    },
    {
      name: 'Review Corpus',
      type: 'api',
      description: 'Aggregated product reviews from Amazon, Best Buy, Reddit, and specialty review sites'
    }
  ],
  outputFormats: [
    'Price Comparison Tables',
    'Deal Alert Notifications',
    'Product Review Summaries',
    'Shopping List Optimizations',
    'Price History Charts',
    'Budget Tracking Reports',
    'Coupon & Cashback Stacking Guides',
    'Purchase Timing Recommendations'
  ],
  defaultModel: 'ORACLE_LITE',
  features: {
    videoGen: false,
    tts: true,
    imageGen: false,
    maps: true,
    search: true,
    governance: false,
    stripe: true
  }
};

export default shopper;
