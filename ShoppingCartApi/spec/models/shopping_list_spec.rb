# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ShoppingList do
  subject do
    described_class.new(title: 'Test Example')
  end

  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end

  it 'is not valid without a title' do
    subject.title = nil
    expect(subject).to_not be_valid
  end
end
