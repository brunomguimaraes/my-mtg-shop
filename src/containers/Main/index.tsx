import React from "react";
import NavBar from "../../components/NavBar";
import { Container, CssBaseline } from "@material-ui/core";
import environment from "../../relay/Environment";
import Loading from "../../components/Loading";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import ProductsList from "../../components/ProductsList";
import { MainQuery } from "./__generated__/MainQuery.graphql";

const Main: React.FC = () => {
	return (
		<QueryRenderer<MainQuery>
			environment={environment}
			query={MainViewerQuery}
			variables={{}}
			render={({ error, props }): React.ReactNode => {
				if (error) {
					return <div>Erro ao carregar produtos</div>;
				}
				if (!props) {
					return <Loading />;
				}
				return (
					<React.Fragment>
						<CssBaseline />
						<NavBar viewer={props.viewer} showCart={true} />
						<Container maxWidth="md">
							<ProductsList
								allProducts={props.viewer.allProducts as any}
								shoppingCart={
									props.viewer.User!.shoppingCart as any
								}
							/>
						</Container>
					</React.Fragment>
				);
			}}
		/>
	);
};

export default Main;

const MainViewerQuery = graphql`
	query MainQuery {
		viewer {
			...NavBar_viewer
			allProducts {
				...ProductsList_allProducts
			}
			User(id: "cjzyfwspn0f1a01671todqxul") {
				shoppingCart {
					...ProductsList_shoppingCart
				}
			}
		}
	}
`;
