"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

const BlockchainIntel = () => {
  const [searchAddress, setSearchAddress] = useState('');
  const [addressInfo] = useState({
    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    balance: '125.45 ETH',
    transactions: 45,
    riskScore: 85,
    relatedAddresses: [
      '0x123...abc',
      '0x456...def',
      '0x789...ghi'
    ],
    recentTransactions: [
      { hash: '0xabc...123', value: '10.5 ETH', timestamp: '2024-03-28 14:30' },
      { hash: '0xdef...456', value: '5.2 ETH', timestamp: '2024-03-28 12:15' },
      { hash: '0xghi...789', value: '15.8 ETH', timestamp: '2024-03-27 23:45' }
    ]
  });

  return (
    <div className="container mx-auto p-6">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft size={20} />
        <span>Back to Portfolio</span>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Blockchain Intelligence Platform</h1>

      <div className="mb-8">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter wallet address"
            className="flex-1 p-2 border rounded"
            value={searchAddress}
            onChange={(e) => setSearchAddress(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
            <Search size={20} />
            <span>Search</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-600">Balance</h3>
            <p className="text-2xl font-bold">{addressInfo.balance}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-600">Transactions</h3>
            <p className="text-2xl font-bold">{addressInfo.transactions}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-600">Risk Score</h3>
            <p className="text-2xl font-bold text-red-600">{addressInfo.riskScore}/100</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {addressInfo.recentTransactions.map((tx, index) => (
                <div key={index} className="border-b pb-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{tx.hash}</span>
                    <span className="text-sm text-gray-600">{tx.value}</span>
                  </div>
                  <div className="text-xs text-gray-500">{tx.timestamp}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Addresses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {addressInfo.relatedAddresses.map((address, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                  {address}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlockchainIntel;