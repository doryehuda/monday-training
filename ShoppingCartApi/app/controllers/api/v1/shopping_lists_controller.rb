class Api::V1::ShoppingListsController < ApplicationController
  before_action :set_shopping_list, only: [:show, :update, :destroy]

  # GET /shopping_lists
  def index
    @shopping_lists = ShoppingList.all

    render json: @shopping_lists
  end

  # GET /shopping_lists/1
  def show
    render json: @shopping_list
  end

  # POST /shopping_lists
  def create
    @request = request
    @shopping_list = ShoppingList.new(shopping_list_params)

    if @shopping_list.save
      render json: @shopping_list, status: :created, location: @shopping_list
    else
      render json: @shopping_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shopping_lists/1
  def update
    if @shopping_list.update(shopping_list_params)
      render json: @shopping_list
    else
      render json: @shopping_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shopping_lists/1
  def destroy
    @shopping_list.destroy
  end

  # because this is an api, needs base url provider
  def shopping_list_url(shopping_list)
    "#{@request.path}/#{shopping_list.slug}"
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shopping_list
      @shopping_list = ShoppingList.friendly.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def shopping_list_params
      params.require(:shopping_list).permit(:title, :slug)
    end


end
