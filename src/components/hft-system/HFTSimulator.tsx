"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const HFTSimulator = () => {
  const [orderBook] = useState({
    bids: [
      { price: 99.50, quantity: 100 },
      { price: 99.25, quantity: 150 },
      { price: 99.00, quantity: 200 }
    ],
    asks: [
      { price: 100.50, quantity: 120 },
      { price: 100.75, quantity: 180 },
      { price: 101.00, quantity: 160 }
    ]
  });

  const [priceHistory] = useState([
    { time: '09:30', price: 100.00 },
    { time: '09:31', price: 100.25 },
    { time: '09:32', price: 100.15 },
    { time: '09:33', price: 100.35 },
    { time: '09:34', price: 100.20 },
    { time: '09:35', price: 100.40 }
  ]);

  const [performance] = useState({
    trades: 150,
    volume: 25000,
    pnl: 1250.75,
    latency: 0.15
  });

  return (
    <div className="container mx-auto p-6">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft size={20} />
        <span>Back to Portfolio</span>
      </Link>

      <h1 className="text-3xl font-bold mb-6">HFT System Simulator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-600">Total Trades</h3>
            <p className="text-2xl font-bold">{performance.trades}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-600">Volume</h3>
            <p className="text-2xl font-bold">${performance.volume.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-600">P&L</h3>
            <p className="text-2xl font-bold">${performance.pnl.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-600">Latency (ms)</h3>
            <p className="text-2xl font-bold">{performance.latency}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="h-96">
          <CardHeader>
            <CardTitle>Price History</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#2563eb" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Book</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Asks</h4>
                {orderBook.asks.map((ask, index) => (
                  <div key={index} className="flex justify-between text-sm mb-1">
                    <span>${ask.price.toFixed(2)}</span>
                    <span>{ask.quantity}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Bids</h4>
                {orderBook.bids.map((bid, index) => (
                  <div key={index} className="flex justify-between text-sm mb-1">
                    <span>${bid.price.toFixed(2)}</span>
                    <span>{bid.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HFTSimulator;