# frozen_string_literal: true

class ShoppingList < ApplicationRecord
  validates_presence_of :title

  extend FriendlyId
  friendly_id :title, use: :slugged
end
